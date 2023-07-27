import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("kTnKETkt");
  const response = NextResponse.next();

  const protectedPaths = ["/home", "/swipe", "/profileExtend", "/postulations", "/messages", "/interviews", "/suscriptions"];
  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (jwt?.value === undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    try {
      const { payload } = await jwtVerify(
        jwt?.value,
        new TextEncoder().encode("DSxSz^r#r@6u^ZFkipmgySATzypg@&MMyuW@Kigp")
      );
      const AiOiJKV1Q = payload.user_info.id;
      response.cookies.set({
        name: "AiOiJKV1Q",
        value: AiOiJKV1Q,
        expires: expirationDate,
      });
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL("login", request.url));
    }
  }

  const publicPaths = ["/login", "/signup", "/emailvalidate", "/forgotpass"];
  if (publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (jwt?.value !== undefined) {
      try {
        const { payload } = await jwtVerify(
          jwt?.value,
          new TextEncoder().encode("DSxSz^r#r@6u^ZFkipmgySATzypg@&MMyuW@Kigp")
        );
        if (payload.user_info) {
          return NextResponse.redirect(new URL("/home", request.url));
        }
      } catch (error) {
        // Nada.
      }
    }
  }

  return response;
}
