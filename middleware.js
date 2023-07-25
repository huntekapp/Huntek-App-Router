import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("token");

  if (jwt?.value === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(jwt?.value, new TextEncoder().encode("DSxSz^r#r@6u^ZFkipmgySATzypg@&MMyuW@Kigp"));
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("login", request.url));
  }
}

export const config = {
  matcher: ["/home", "/swipe", "/profileExtend", "/conversations", "/interviews", "/notifications"],
};