"use client"

import { useState, useMemo, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "deposit" | "withdrawal";
}

type Sort = {
  key: keyof Transaction;
  order: "asc" | "desc";
}

export default function Component() {
  const [search, setSearch] = useState<string>("")
  const [sort, setSort] = useState<Sort>({ key: "date", order: "desc" })
  const [page, setPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const transactions = useMemo<Transaction[]>(() => {
    const allTransactions: Transaction[] = [
      {
        id: 1,
        date: "2023-04-15",
        description: "Paycheck",
        amount: 5000,
        type: "deposit",
      },
      {
        id: 2,
        date: "2023-04-10",
        description: "Rent Payment",
        amount: 1500,
        type: "withdrawal",
      },
      {
        id: 3,
        date: "2023-04-05",
        description: "Grocery Shopping",
        amount: 150,
        type: "withdrawal",
      },
      {
        id: 4,
        date: "2023-03-30",
        description: "Online Purchase",
        amount: 75,
        type: "withdrawal",
      },
      {
        id: 5,
        date: "2023-03-25",
        description: "Utility Bill",
        amount: 200,
        type: "withdrawal",
      },
      {
        id: 6,
        date: "2023-03-20",
        description: "Paycheck",
        amount: 5000,
        type: "deposit",
      },
      {
        id: 7,
        date: "2023-03-15",
        description: "Dining Out",
        amount: 50,
        type: "withdrawal",
      },
      {
        id: 8,
        date: "2023-03-10",
        description: "Subscription Renewal",
        amount: 20,
        type: "withdrawal",
      },
      {
        id: 9,
        date: "2023-03-05",
        description: "Paycheck",
        amount: 5000,
        type: "deposit",
      },
      {
        id: 10,
        date: "2023-02-28",
        description: "Gas Refill",
        amount: 40,
        type: "withdrawal",
      },
      {
        id: 11,
        date: "2023-02-23",
        description: "Online Purchase",
        amount: 100,
        type: "withdrawal",
      },
      {
        id: 12,
        date: "2023-02-18",
        description: "Paycheck",
        amount: 5000,
        type: "deposit",
      },
    ]

    const searchValue = search.toLowerCase()
    return allTransactions
      .filter((transaction) => {
        return (
          transaction.date.toLowerCase().includes(searchValue) ||
          transaction.description.toLowerCase().includes(searchValue) ||
          transaction.amount.toString().toLowerCase().includes(searchValue) ||
          transaction.type.toLowerCase().includes(searchValue)
        )
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1
        }
      })
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
  }, [search, sort, page, itemsPerPage])

  const handleSort = (key: keyof Transaction) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:justify-between  " >
          <h1 className="text-2xl font-bold">Transaction History</h1>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search transactions..."
              className="bg-white dark:bg-gray-950"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup value={sort.key} onValueChange={(key: string) => handleSort(key as keyof Transaction)}>
                  <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="description">Description</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="amount">Amount</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-[120px]">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="text-right">
                    {transaction.type === "deposit" ? (
                      <span className="text-green-500">+${transaction.amount.toFixed(2)}</span>
                    ) : (
                      <span className="text-red-500">-${transaction.amount.toFixed(2)}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-medium text-center ${transaction.type === "deposit"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        }`}
                    >
                      {transaction.type}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, transactions.length)} of{" "}
            {transactions.length} transactions
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage((page) => Math.max(page - 1, 1))} />
              </PaginationItem>
              {Array.from({
                length: Math.ceil(transactions.length / itemsPerPage),
              }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink onClick={() => setPage(i + 1)} isActive={page === i + 1}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((page) => Math.min(page + 1, Math.ceil(transactions.length / itemsPerPage)))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}
