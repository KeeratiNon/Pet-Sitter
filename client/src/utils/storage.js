import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://zljerlfbpexcqsayzrqs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsamVybGZicGV4Y3FzYXl6cnFzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDM2ODQxMywiZXhwIjoyMDM1OTQ0NDEzfQ.8EB7DP0qpwds3A7-YE7iwqQoJ2luOULWKtBAqHt2ZeA"
);

export default supabase;
