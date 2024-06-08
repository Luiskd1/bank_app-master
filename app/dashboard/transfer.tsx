import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const Transfer = () => {
  return (
    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transfers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2023-05-01</TableCell>
                                        <TableCell>Rent Payment</TableCell>
                                        <TableCell className="text-right">-$1,500.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-05-05</TableCell>
                                        <TableCell>Grocery Shopping</TableCell>
                                        <TableCell className="text-right">-$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-05-10</TableCell>
                                        <TableCell>Paycheck</TableCell>
                                        <TableCell className="text-right">+$4,000.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-05-15</TableCell>
                                        <TableCell>Utility Bill</TableCell>
                                        <TableCell className="text-right">-$200.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2023-05-20</TableCell>
                                        <TableCell>Online Purchase</TableCell>
                                        <TableCell className="text-right">-$75.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
  )
}

export default Transfer
