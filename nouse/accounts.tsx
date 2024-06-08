'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
import useApi from '@/hooks/useApi'
import { useApiBank } from '@/lib/fetchapibank/fetch'
import { SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import { Bankschemadata } from '../app/dashboard/cards'

const Accounts = () => {
    const [isActive, setIsActive] = useState(true);
    const { data: datauser, isLoading } = useApi();
    const { data: databank } = useApiBank()


    const dataAll = databank?.data
    const dataunique = datauser?.data.session?.user.id // id session


    const firstdatatomada = dataAll?.filter((x: any) => x.user_id === dataunique)


    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (

        <Card className='flex flex-col w-full' style={{ backgroundImage: 'url(/bg_card.jpg)' }}>
            <CardHeader>

                <CardDescription  className='flex justify-between  '>
                    <Select  defaultValue=''>
                        <SelectTrigger  className=" font-bold text-white border-transparent w-30 h-10 bg-transparent rounded-full">
                            <SelectValue placeholder='Account' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='bg-transparent'>
                                <SelectItem className='bg-transparent' value='acc1'>Account 1</SelectItem>
                                <SelectItem className='bg-transparent' value='acc2'>Account 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Badge variant={isActive ? 'success' : 'secondary'} className='m-3' onClick={handleToggle}>
                        {isActive ? 'Active' : 'Disable'}
                    </Badge>
                </CardDescription>

            </CardHeader>
            <CardContent className='flex h-full items-end justify-center'>
                <CardTitle className='text-white'>
                    $ {firstdatatomada?.map((x: Bankschemadata) => x.saldo) || 0}
                </CardTitle>
            </CardContent>
            <CardFooter className='flex w-full h-full justify-between items-end'>

                <CardTitle className='text-white'>
                    {datauser?.data?.session?.user.user_metadata.name}
                </CardTitle>

                <CardTitle className='text-white'>
                    {datauser?.data?.session?.user.user_metadata.cedula}
                </CardTitle>


            </CardFooter>

        </Card>

    )
}

export default Accounts
