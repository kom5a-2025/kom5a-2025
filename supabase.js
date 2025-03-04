import { createClient } from '@supabase/supabase-js';

// Récupération des variables d'environnement
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

// Initialisation de Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
