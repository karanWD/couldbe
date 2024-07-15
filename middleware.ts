import { NextResponse } from 'next/server'

export function middleware(req: any) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-current-path', req.nextUrl.pathname)
  const newRes = {
    request: {
      headers: requestHeaders,
    },
  } as any
  return NextResponse.next(newRes)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
