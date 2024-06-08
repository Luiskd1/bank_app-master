import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ForgetPage = () => {
    return (
        <div className=" w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex flex-col mx-auto max-w-md space-y-6 py-12 justify-center ">
                <div className="space-y-2 text-center ">
                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your email address and we&apos;ll send you a link to reset your password.
                    </p>
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Reset Password
                    </Button>
                </form>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/auth/login" className="font-medium underline underline-offset-2" prefetch={false}>
                        Back to login
                    </Link>
                </div>
            </div>
            <div className="hidden h-screen bg-muted lg:block ">
                <Image
                    src="https://picsum.photos/1000"
                    alt="ImageForget"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.4]  "
                />
            </div>
        </div>
    )
}

export default ForgetPage
