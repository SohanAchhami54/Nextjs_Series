import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// createClient() (from @/lib/supabase/server) is set up so it can read and write cookies on the server, usually through Next.js cookies().
export async function createClient() {
  const cookieStore = await cookies();

  // createServerClient(url, key, { cookies: {...} })                                                         
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();//lets supabase read cookies(verifier, session)
        },
        setAll(cookiesToSet) { //lets supabase write cookies (session after login)
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component; safe to ignore
            // because the proxy refreshes the session.
          }
        },
      },
    }
  );
}
