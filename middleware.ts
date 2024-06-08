import { NextResponse } from "next/server";
import { updateSession } from "./lib/Supa/middleware"
import createClient from "./lib/Supa/server"

export async function middleware(request:any) {
  const res =  await updateSession(request)

  const supabase = createClient();

  const {data:{user}} = await supabase.auth.getUser()


  if (!user) {
    return NextResponse.rewrite(new URL('https://bank-app-master-gh1jayqln-luiskd1s-projects.vercel.app/auth/login' ))
  }

  console.log(user)
  return res
}

export const config = {
  matcher: [
    // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)', 
    '/dashboard','/history','/settings','/transfer', '/account'
  ],
}