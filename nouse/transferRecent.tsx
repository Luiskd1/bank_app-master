import { Avatar } from '@/components/ui/avatar'
import { CardContent, CardTitle, Card, CardHeader } from '@/components/ui/card'
import { AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const TransferRecent = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Recent Transfer</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 justify-center  sm:justify-normal  ">

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/150?img=30'  color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Olivia Martin
            </p>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/150?img=20' color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Jackson Lee
            </p>
            <p className="text-sm text-muted-foreground">
              jackson.lee@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/150?img=44'  color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Isabella Nguyen
            </p>
            <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$299.00</div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/150?img=1'  color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              William Kim
            </p>
            <p className="text-sm text-muted-foreground">
              will@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/150?img=3'  color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              William Kim
            </p>
            <p className="text-sm text-muted-foreground">
              will@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src='https://i.pravatar.cc/300'  color='default'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Sofia Davis
            </p>
            <p className="text-sm text-muted-foreground">
              sofia.davis@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
      </CardContent>
    </Card>
  
  )
}

export default TransferRecent
