import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://blrpwzwwecocwqyvplta.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscnB3end3ZWNvY3dxeXZwbHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTMxMTYsImV4cCI6MjA2ODU4OTExNn0.way9QveRyIhoQJ6mp6osFEkngSRboNQkrZ00__4l6wI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)