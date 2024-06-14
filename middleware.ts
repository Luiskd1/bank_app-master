import { NextResponse } from "next/server";
import { updateSession } from "./lib/Supa/middleware";
import createClient from "./lib/Supa/server";

export async function middleware(request:any) {
  try {
    const res = await updateSession(request);

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error al obtener el usuario:', error.message);
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (!user) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    console.log(user);
    return res;
  } catch (error) {
    console.error('Error en el middleware:', error);
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: [
    '/dashboard',
    '/history',
    '/settings',
    '/transfer',
    '/account',
  ],
};
