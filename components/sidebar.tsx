'use client'
import { siteConfig } from './config/site'
import Link from "next/link";
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import useApi from '@/hooks/useApi';
import { useSidebar } from '@/hooks/useSideBar';
import Hbutton from './other/hbutton';
import Image from 'next/image';



const SideBar = () => {
    const { data } = useApi();
    const { toggleSidebar, isSidebarOpen } = useSidebar();
    return (
        <div className={`${isSidebarOpen ? 'hidden sm:flex' : 'flex w-1/6'} sm:flex hidden`}>
            {data?.data.session && (
                <aside className=" flex-col  sm:flex h-screen w-full ">

                    <div className='flex justify-between items-center ml-5 h-[6.5%]'>
                        <Hbutton onClick={toggleSidebar} />
                        {!isSidebarOpen ? <h1><strong>BANK</strong> APP</h1> : ''}
                        {!isSidebarOpen ? <Image src="/logo.png" className='rounded-full mr-3 dark:invert' height={50} width={50} alt='logo' /> : ''}

                    </div>
                    <Separator orientation='horizontal' />
                    <ul className='flex flex-col items-start gap-4 px-2 sm:py-5'>
                        {
                            siteConfig.navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Button
                                        className='gap-3'
                                        variant={'link'}
                                        key={item.href}>
                                       
                                        <Link  className='flex gap-4' href={item.href}>  <Icon />
                                            {!isSidebarOpen ? item.label : ''}
                                        </Link>
                                    </Button>
                                )
                            })
                        }
                    </ul>
                </aside>

            )}
            <Separator orientation="vertical" />       

        </div>

    )
}

export default SideBar

