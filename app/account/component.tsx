import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import React from 'react'

const Component = () => {

  const {data} = useApi()
  return (
    <div className="flex flex-col h-full p-4 ">
      <Card className="p-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{data?.data?.session?.user.user_metadata.name}</h1>
          <p className="text-gray-500">Total Balance: $12,345.67</p>
        </div>
        <Button variant="default" size="sm">
          Add Account
        </Button>
      </Card>
      <div className="flex-1 overflow-auto p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Checking Account</CardTitle>
              <CardDescription>Account #: 1234567890</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">Current Balance</p>
                <p className="text-2xl font-bold">$5,678.90</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Savings Account</CardTitle>
              <CardDescription>Account #: 0987654321</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">Current Balance</p>
                <p className="text-2xl font-bold">$6,789.01</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Credit Card</CardTitle>
              <CardDescription>Account #: 1357924680</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">Current Balance</p>
                <p className="text-2xl font-bold">$1,234.56</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Component
