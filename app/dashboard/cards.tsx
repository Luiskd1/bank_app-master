import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BriefcaseIcon, CreditCardIcon, DollarSignIcon } from "@/components/config/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import { useApiBank } from '@/lib/fetchapibank/fetch'

export interface Bankschemadata {
    id: number,
    cedula: number,
    name: string,
    user_id: string,
    created_at: string,
    saldo: number
  }
const Cards = () => {
    const { data: datauser } = useApi()
    const { data: databank } = useApiBank()
    const dataAll = databank?.data
    const dataunique = datauser?.data.session?.user.id // id session
    const firstdatatomada = dataAll?.filter((x: any) => x.user_id === dataunique)
    const firstdatatomadasaldo = firstdatatomada?.map((x: Bankschemadata) => x.saldo)
    console.log(firstdatatomadasaldo)
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* CURRENT BALANCE */}
            <Card >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                    <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent className="flex justify-between">
                    <div>
                        <div className="text-3xl font-bold">${firstdatatomadasaldo}</div>

                        <p className="text-xs text-gray-500 dark:text-gray-400">+2.1% from last month</p>
                    </div>
                    <Select defaultValue={'usd'}>
                        <SelectTrigger className="w-[80px] h-[30px]  rounded-full">
                            <SelectValue placeholder='Select Currency' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value='usd'>USD</SelectItem>
                                <SelectItem value='col'>COL</SelectItem>
                                <SelectItem value='eur'>EUR</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>
            {/* EXPENSES */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                    <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">$3,456.78</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+5.3% from last month</p>
                </CardContent>
            </Card>
            {/* INCOMES */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Income</CardTitle>
                    <BriefcaseIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">$8,901.23</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">+3.7% from last month</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards
