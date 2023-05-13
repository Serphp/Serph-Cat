import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://azdltemsflxeuruxexmi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZGx0ZW1zZmx4ZXVydXhleG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5OTgxMzAsImV4cCI6MTk5ODU3NDEzMH0.Ak2DB4mccneesHadtU3Q5TwlxkHUbvueFaLGxLMaoX4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
