import { submitDemoRequest } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Debug: Check if API key is loaded
  console.log('Resend API key exists:', !!process.env.RESEND_API_KEY);
  console.log('API key first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
  try {
    const body = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, companyName, firmType } = body;
    
    if (!firstName || !lastName || !email || !companyName || !firmType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Save to Supabase
    await submitDemoRequest({
      firstName,
      lastName,
      email,
      companyName,
      firmType
    });
    
    // Send email notification
    try {
      const emailResponse = await resend.emails.send({
        from: 'no-reply@trypalace.com', // Use Resend's test domain for now
        to: 'founders@trypalace.com',
        subject: 'New Demo Request',
        html: `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Firm Type:</strong> ${firmType}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `
      });
      
      console.log('Email sent successfully:', emailResponse);
    } catch (emailError) {
      // Log email error but don't fail the request since data was saved
      console.error('Failed to send email notification:', emailError);
      console.error('Email error details:', JSON.stringify(emailError, null, 2));
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing demo request:', error);
    
    // Return a generic error message to the client
    return NextResponse.json(
      { error: 'Failed to submit demo request. Please try again.' },
      { status: 500 }
    );
  }
}