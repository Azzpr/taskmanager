import { createClient } from "@supabase/supabase-js";
import { variables } from "./variables";
const supabaseUrl = variables.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = variables.SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
