import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pdtszbpirydxzobjpcgl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdHN6YnBpcnlkeHpvYmpwY2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNzA0NzYsImV4cCI6MjA1OTY0NjQ3Nn0.YeZgsNlCEfSPQSuBTyEhU7u3TFaqdhOa7d6hEcyoy6Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
