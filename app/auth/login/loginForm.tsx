'use client'

import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useApi from "@/hooks/useApi";
import { Eye, EyeOff } from "lucide-react";
import { schemaLogin, userLogin } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { GetSession, SingInUser } from "../actions";
import GoogleButton from "@/components/googlebutton";
import Image from "next/image";


const LoginPage = () => {
  const [showpasswords, setShowPasswords] = useState(false)
  const route = useRouter()
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<userLogin>({
    resolver: zodResolver(schemaLogin)
  })

  const { mutate } = useMutation({ mutationFn: (data: userLogin) => SingInUser(data) })

  const { refetch } = useApi()
  
  


  const onShowPassword = () => {
    setShowPasswords(!showpasswords)
  }

  const onSubmit: SubmitHandler<userLogin> = (data) => {
    const result = mutate(data, {
      onSuccess: (error: any) => {
        if (error.error) {
          toast({ variant: 'destructive', description: 'incorrect credentials' })
          reset({ password: '' })
          console.log(error.error)
        }
        toast({ description: 'successfully logged in' })
        route.push('/dashboard')
        refetch()
      }
    })
    console.log(result)
  }


  // useEffect(() => {

  //   async () => {
  //     const { data: { session } } = await GetSession()
  //     if (session) route.push('/dashboard')
  //   }

  // }, [route])



  return (
    <div className=" w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex flex-col items-center justify-center py-12 h-screen relative">
        <div className="w-full flex justify-end items-end absolute  top-8" >
        </div>
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login Page</h1>
            <p className="text-muted-foreground text-center">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                
                {...register('email')}
              />
              {errors.email && <p>{errors?.email.message}</p>}
            </div>

            <div className="grid gap-2">
              <div className="grid gap-2 relative">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forget"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showpasswords ? "text" : "password"}
                    {...register("password")}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button onClick={onShowPassword}>
                      {!showpasswords ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                </div>
                {errors.password && <p>{errors?.password.message}</p>}
              </div>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>

            <div className="flex items-center justify-center gap-4 mt-2 text-picton-blue-800">
              <div className="w-24 border-t border-picton-blue-700"></div>
              <div className="font-bold">or</div>
              <div className="w-24 border-t border-picton-blue-700"></div>
            </div>

           <GoogleButton/>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden h-screen bg-muted lg:block ">
        <Image
          src="https://picsum.photos/1000"
          alt="Imagelogin"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.4]  "
        />
      </div>
    </div>

  )
}

export default LoginPage
