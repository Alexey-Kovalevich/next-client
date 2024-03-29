import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (request.nextUrl.pathname.startsWith("/dashboard")
      && request.nextauth.token?.role !== "admin"
      && request.nextauth.token?.role !== "manager") {
      return NextResponse.rewrite(
        new URL("/permission", request.url)
      )
    }

    if (request.nextUrl.pathname.startsWith("/dashboard/admin")
      && request.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(
        new URL("/permission", request.url)
      )
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = { matcher: ["/dashboard/admin", "/dashboard"] }