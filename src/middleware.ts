import { NextResponse } from "next/server";
import { COOKIE } from "@/utils/cookie.helper";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/auth")) {
    const token = request.cookies.get(COOKIE.TOKEN)?.value;
    const user = request.cookies.get(COOKIE.USER)?.value;

    if (!token || !user) {
      console.log("caiu");
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
