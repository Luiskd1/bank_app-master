'use client'
import SwitchTheme from "@/components/switchTheme";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const { theme, } = useTheme()
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;
          <code className="font-mono font-bold">Hello World!</code>
        </p>

        <SwitchTheme />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy {" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
            />
          </a>

        </div>
      </div>

      <div className='flex justify-center items-center'>

        <Link
          href="/auth/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Get Started{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            A BANK application built with Next.js and Supabase
          </p>
        </Link>

      </div>

      <div className="mb-32 flex text-center gap-5 items-center justify-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Image
          src="/next.svg"
          alt="Next Logo"
          className="dark:invert"
          width={100}
          height={24}
        />

        <strong className="text-3xl">+</strong>
        {theme === 'dark' || theme === 'system' || theme === undefined ?
          <Image
            src="supa2.svg"
            alt="Supa Dark Logo"
            className="dark"
            width={200}
            height={54}
          />
          :
          <Image
            src="supa.svg"
            alt="Supa Light Logo"
            className={theme === undefined ? 'invert' : ''}
            width={200}
            height={54}
          />
        }
      </div>
    </main>
  );
}
