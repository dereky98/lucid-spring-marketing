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