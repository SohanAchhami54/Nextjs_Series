import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url); 
  console.log("origin:",origin)
  console.log("searchparams:",searchParams)
  //This code is like a one-time ticket that proves the user successfully logged in with Google.
  const code = searchParams.get("code");

  // Only allow relative redirects (prevents open-redirect attacks)
  let next = searchParams.get("next") ?? "/dashboard";
  if (!next.startsWith("/")) next = "/dashboard";

  if (code) {
    //it can read and write the cookies.
    const supabase = await createClient(); //create supabase client. 
    // exchangeCodeForSession(code) sends the code and the code_verifier cookie to Supabase Auth.
    //if match then it returns the session containing access and refresh token and saved into cookie.
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) { 
      const forwardedHost = request.headers.get("x-forwarded-host"); 
      const isLocal = process.env.NODE_ENV === "development"; 

      if (isLocal) return NextResponse.redirect(`${origin}${next}`);
      if (forwardedHost) return NextResponse.redirect(`https://${forwardedHost}${next}`);
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
