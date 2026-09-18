import { NextResponse } from "next/server"

export function proxy(request) {
  const { pathname } = request.nextUrl

  const sections = ["image","product"]

  // Check if the path starts with any section
  for (const section of sections) {
    if (pathname.startsWith(`/${section}/`)) {
      // Redirect to the main section page
      return NextResponse.redirect(new URL(`/${section}`, request.url))
    }
  }
  // Skip Next.js internal files and homepage
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
};
