import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Cards from "./cards"
import Chard from "./chard"
import TransferRecent from "../../nouse/transferRecent"
import Transfer from "./transfer"
import Redirect from "@/hooks/redirect"
import { useEffect } from "react"



export default function ComponentDash() {



    return (
        <div className="flex flex-col w-full" style={{ height: "calc(100vh -60px)" }}>
            <main className="flex flex-col gap-8 p-4 md:p-10">
                <Cards />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Chard />
                    <Transfer />
                </div>
            </main>
        </div>
    )
}



