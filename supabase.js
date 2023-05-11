import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iayfrdhvbpqemsotefnj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlheWZyZGh2YnBxZW1zb3RlZm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTcxMTYsImV4cCI6MTk5OTEzMzExNn0.Wq_JcCgWp8rXsVqXQQa9QA3ljBv_MoxccwQb5mF3oz0"

const supabase = createClient(supabaseUrl, supabaseKey)
