import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { AtSignIcon, BellIcon, CameraIcon, EyeOffIcon, PlusIcon, TrashIcon } from "@/components/config/icons"
import Image from "next/image"

export default function PersonalInfo() {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <div className="max-w-full mx-auto m-4 md:px-6 ">
                <div className="flex flex-col  justify-center sm:flex-row md:grid-cols-2 w-full gap-4">
                    <div className="space-y-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile</CardTitle>
                                <CardDescription>Update your profile information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-20 h-20 border">
                                        {/* <Image src="https://i.pravatar.cc/300" alt="imageAvatar " width={20} height={20} /> */}
                                        <AvatarFallback>JM</AvatarFallback>
                                    </Avatar>
                                    <Button variant="outline">
                                        <CameraIcon className="w-4 h-4 mr-2" />
                                        Change Photo
                                    </Button>
                                </div>
                                <div className="flex-col gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="User Name" />
                                </div>
                                <div className="flex-col gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue="UserName@example.com" />
                                </div>
                                <div className="flex-col gap-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                                <CardDescription>Choose what you want to be notified about.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-2">
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-1 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <BellIcon className="mt-px h-5 w-5" />
                                    <div className="flex w-full justify-between">
                                        <div className="gap-2">
                                            <p className="text-sm font-medium leading-none">Everything</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email digest, mentions & all activity.</p>
                                        </div>
                                        <Switch id="notification-everything" />
                                    </div>
                                </div>

                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-1 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <AtSignIcon className="mt-px h-5 w-5" />
                                    <div className="flex w-full justify-between">
                                        <div className="gap-2">
                                            <p className="text-sm font-medium leading-none">Available</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Only mentions and comments.</p>
                                        </div>
                                        <Switch id="notification-available" defaultChecked />
                                    </div>
                                </div>

                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-1 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <EyeOffIcon className="mt-px h-5 w-5" />
                                    <div className="flex w-full justify-between">
                                        <div className="gap-2">
                                            <p className="text-sm font-medium leading-none">Ignoring</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Turn off all notifications.</p>
                                        </div>
                                        <Switch id="notification-ignoring" />
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-2 m-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>Change your account password.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="current-password">Current Password</Label>
                                    <Input id="current-password" type="password" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="new-password">New Password</Label>
                                    <Input id="new-password" type="password" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Change Password</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Linked Accounts</CardTitle>
                                <CardDescription>Manage your connected accounts.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <Avatar className="w-10 h-10 border">
                                        <AvatarImage src={''} />
                                        <AvatarFallback>G</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">Google</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">User.Name@example.com</p>
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <TrashIcon className="w-4 h-4" />
                                        <span className="sr-only">Unlink Google account</span>
                                    </Button>
                                </div>
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <Avatar className="w-10 h-10 border">
                                        <AvatarImage src={''} />
                                        <AvatarFallback>A</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">Apple</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">User.Name@icloud.com</p>
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <TrashIcon className="w-4 h-4" />
                                        <span className="sr-only">Unlink Apple account</span>
                                    </Button>
                                </div>
                                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    <Avatar className="w-10 h-10 border">
                                        <AvatarImage src={''} />
                                        <AvatarFallback>F</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm font-medium leading-none">Facebook</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">User.Name@facebook.com</p>
                                    </div>
                                    <Button variant="outline" size="icon">
                                        <TrashIcon className="w-4 h-4" />
                                        <span className="sr-only">Unlink Facebook account</span>
                                    </Button>
                                </div>
                                <Button variant="outline" className="mt-4">
                                    <PlusIcon className="w-4 h-4 mr-2" />
                                    Link New Account
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

