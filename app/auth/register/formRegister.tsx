"use client";
import { userRegister, schemaRegister } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { CreateData } from "../actions";
import Image from "next/image";

const RegisterPage = () => {
  const {toast} = useToast()
  const [passwords, setPasswords] = useState(false)
  const [showpasswords, setShowPasswords] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userRegister>({
    resolver: zodResolver(schemaRegister),
  });
  const { mutate: userPOST, isSuccess } = useMutation({
    mutationFn: (info: userRegister) => {
      return CreateData(info);
    },
  });


  const onPassword = () => {
    setPasswords(!passwords)
  }
  const onShowPassword = () => {
    setShowPasswords(!showpasswords)
  }

  const createUser: SubmitHandler<userRegister> = async (info) => {
    const data = userPOST(info, {
      onSuccess: (user) => {
        console.log("USUARIO SUBIDO"),
          toast({description:"el usuario se registro correctamente"});
      },
      onError: () => {
        console.log("USUARIO ALGO FALLO"),
          toast({variant:'destructive',description:" ocurrio un error al registrar el usuario"});
      },
    });
    console.log(data);
  };

  // const [_, forceRender] = useState(0);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //     containerRef.current = document.body;
  //     forceRender((prev) => prev + 1);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center py-12 h-screen relative">
        <div className="w-full justify-end items-end absolute  top-8 hidden">
        </div>
        <Toaster />
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create Your Account</h1>
            <p className="text-muted-foreground text-center">
              Enter all the corresponding information to register
            </p>
          </div>
          <form onSubmit={handleSubmit(createUser)} className="grid gap-5">
            <div className="grid gap-2">
              <div className="flex gap-2 ">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="firstName"
                    required
                    {...register("firstname")}
                    className={
                      errors.firstname &&
                      "border border-input focus-visible:ring-red-500 "
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="lastName"
                    required
                    {...register("lastname")}
                    className={
                      errors.lastname &&
                      "border border-input focus-visible:ring-red-500 "
                    }
                  />
                </div>
              </div>

              <Label htmlFor="cedula">Cedula</Label>
              <Input
                id="cedula"
                type="cedula"
                required
                {...register("cedula")}
                className={
                  errors.cedula &&
                  "border border-input focus-visible:ring-red-500 "
                }
              />

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                {...register("email")}
                className={
                  errors.email &&
                  "border border-input focus-visible:ring-red-500 "
                }
              />
              {errors.email && <p>{errors?.email.message}</p>}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={!passwords ? "password" : 'text'}
                  required
                  {...register("password")}
                  className={
                    errors.password &&
                    "border border-input focus-visible:ring-red-500 "
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {<button onClick={onPassword}>
                    <>
                      {
                        !passwords ? <Eye /> : <EyeOff />
                      }
                    </>
                  </button>}
                </div>
              </div>

              <div className="flex items-center">
                <Label htmlFor="confirm-password">Confirm Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="passwordConfirm"
                  type={!showpasswords ? "password" : 'text'}
                  required
                  {...register("passwordConfirm")}
                  className={
                    errors.passwordConfirm &&
                    "border border-input focus-visible:ring-red-500 "
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button onClick={onShowPassword}>
                  <>
                      {
                        !showpasswords ? <Eye /> : <EyeOff />
                      }
                    </>
                  </button>
                </div>
              </div>
              {errors.passwordConfirm && <p>{errors?.passwordConfirm.message}</p>}
            </div>
            {/* ajustar codigo parala verificacion automatica y se mantener el alert hasta que se verifique elcorreo */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="submit">register</Button>
              </AlertDialogTrigger>
              {isSuccess && (
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Verify email</AlertDialogTitle>
                    <AlertDialogDescription>
                      Please verify your email address, if you have already done
                      so, please continue.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction><Link href={'/auth/login'}>Continue</Link></AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
            </AlertDialog>

            <div className="flex items-center justify-center gap-4 mt-2 text-picton-blue-800">
              <div className="w-24 border-t border-picton-blue-700"></div>
              <div className="font-bold">or</div>
              <div className="w-24 border-t border-picton-blue-700"></div>
            </div>

            <Button variant="outline" className="w-full flex gap-3 ">
              <FcGoogle style={{ fontSize: "24px" }} />
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Do you have an account?{" "}
            <Link href="/auth/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://picsum.photos/1000"
          alt="Imageregister"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.4] "
        />
      </div>
    </div>
  );
};

export default RegisterPage;
