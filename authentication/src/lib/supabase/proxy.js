import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/dashboard"];
//request = incoming request from the browser and it is next.js nextrequest object.
export async function updateSession(request) {
  let response = NextResponse.next({ request }); //lets the request continue to the page.
  console.log('the value of request is:',request)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() { //read the session cookie to know who the user is.
          return request.cookies.getAll();  
        },
        setAll(cookiesToSet) { //: save a refreshed session cookie, for the page and for the browser.
          //update request + response cookies .
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value) //lets the page that renders next see the fresh session.
          );
          response = NextResponse.next({ request });//sends the fresh cookies back to the browser
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Don't put any code between createServerClient and getUser()
  const {data: { user } } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname; 
  console.log("path is:",path)

  // Not logged in -> block protected pages
  if (!user && PROTECTED_ROUTES.some((route) => path.startsWith(route))) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);  
  }

  // Logged in -> keep them away from /login
  if (user && path === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return response;
}

// and simplify the code if possible 
// and also add input email and password field in form field above the continue with google field 
// and store that info into the  