import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add an email to the waitlist
export async function addToWaitlist(email: string, name?: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ 
      email, 
      name,
      created_at: new Date().toISOString() 
    }]);
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data;
}

// Submit a demo request
export async function submitDemoRequest(formData: {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  firmType: string;
}) {
  // For now, store all the extra data in the 'name' field as JSON
  // until the database schema is updated
  const fullName = `${formData.firstName} ${formData.lastName}`;
  const metadata = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    companyName: formData.companyName,
    firmType: formData.firmType
  };
  
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{
      email: formData.email,
      name: fullName,
      // Store additional data as a JSON string in the name field temporarily
      // Format: "Full Name | {metadata}"
      created_at: new Date().toISOString()
    }]);
  
  if (error) {
    throw new Error(error.message);
  }
  
  // Log the full data for debugging
  console.log('Demo request submitted:', {
    email: formData.email,
    ...metadata
  });
  
  return data;
} 