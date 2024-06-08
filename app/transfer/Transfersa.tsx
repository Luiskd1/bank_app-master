"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SelectForm from "./select";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeftRight,
  ArrowRight,
  Banknote,
  Calendar,
  Currency,
  FolderSync,
  LogOut,
  RefreshCw,
  Wallet,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const FormSchema = z.object({
  account: z.string({
    required_error: "Please select an account in display.",
  }),
  country: z.string({
    required_error: "Please select an country in display.",
  }),
  toaccount: z.string({
    required_error: "PLease select an account to send in display.",
  }),
  amount: z
    .string({
      required_error: "please enter the amount to send ",
    })
    .min(1, { message: "the quantity must be greater than 1 " }),
  currencysa: z.string({
    required_error: "Please select a currency to send in display",
  }),
  routingnumber: z
    .string({
      required_error: "please enter the routing Number ",
    })
    .min(4, { message: "the quantity must be greater than 1 " }),
});


function Transfersa() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const {toast}= useToast()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({ description:`se subio toda la data ${data}`});
  }
  const fechaActual = new Date().toLocaleDateString();
  return (
    <div className="flex w-full gap-4 p-4">
      <div className="  w-full sm:w-8/12 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-fullflex-col"
          >
            <Card className="  ">
              <CardHeader>
                <CardTitle className="flex gap-3">
                  {" "}
                  <Wallet color="blue" /> From -{" "}
                  <LogOut
                    color="#80DAEB"
                    strokeWidth={2.75}
                    absoluteStrokeWidth
                  />{" "}
                  To
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full gap-3">
                  {/* My Account */}
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="account"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>My Account</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Please select from account" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="account1">
                                account 1
                              </SelectItem>
                              <SelectItem value="account2">
                                account 2
                              </SelectItem>
                              <SelectItem value="account3">
                                account 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* To Account */}
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="toaccount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>To Account</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Please select to account" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="toaccount1">
                                to account 1
                              </SelectItem>
                              <SelectItem value="toaccount2">
                                to account 2
                              </SelectItem>
                              <SelectItem value="toaccount3">
                                to account 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

              <Card className="mt-5">
                <CardHeader>
                  <CardTitle className="flex gap-3">
                    {" "}
                    <Banknote color="blue" /> Enter The Transfer Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex-col w-full gap-3">
                    <div className="flex gap-3">
                      {/* Amount */}
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  onChange={field.onChange}
                                  type="number"
                                  placeholder="Please enter the amount"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Currency */}
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="currencysa"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Currency</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue="dollar"
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Please select to account" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="dollar">Dollar</SelectItem>
                                  <SelectItem value="euro">Euro</SelectItem>
                                  <SelectItem value="cop">COP</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      {/* Country */}
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Please select from account" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="colombia">
                                    Colombia
                                  </SelectItem>
                                  <SelectItem value="españa">España</SelectItem>
                                  <SelectItem value="usa">
                                    Unite State
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Cedula */}
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="routingnumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Routing Number</FormLabel>
                              <FormControl>
                                <Input
                                  onChange={field.onChange}
                                  type="number"
                                  placeholder="Put the routing number"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/*  agregaremos ahora el checkbox de condiciones */}
              <div className="flex items-center pt-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex pl-3"
                >
                  i agree to above to the
                  <p className="font-bold pl-1"> conditions</p>
                </label>
              </div>
              {/* agregamos ahora el boton */}
              <div className="w-full flex justify-center items-center  mt-4 ">
                <Button type="submit" className="flex w-4/5  ">
                  Pay to Other Account
                </Button>
              </div>
          </form>
        </Form>
      </div>




      {/* card de confirmar el monto a enviar */}

      <div className="w-4/12 text-lg hidden sm:block">
        <Card className="px-14 py-4 ">
          <h1>Transfer Details</h1>
          <div className="flex w-full items-center justify-center mt-6">
            <div className="justify-center items-center text-center  w-1/3">
              <h2>{form.watch("amount")}</h2>
              <h3>{form.watch("currencysa")}</h3>
            </div>
            <div className="flex w-1/3 items-center justify-center">
              {" "}
              <ArrowLeftRight />{" "}
            </div>
            <div className="w-1/3 text-center">
              <h2>{form.watch("amount")}</h2>
              <h3>{form.watch("currencysa")}</h3>
            </div>
          </div>
          <Separator className=" border-t border-dashed border-black h-0 mt-9" />
          <div className="flex-col gap-44">
            <div className="flex w-full justify-between pt-8">
              <h2 className="flex  gap-3 mb-7">
                {" "}
                <FolderSync /> Transfer Fee
              </h2>
              <h2>$0.0</h2>
            </div>
            <div className="flex w-full justify-between pt-8">
              <h2 className="flex gap-3 mb-7">
                {" "}
                <RefreshCw />
                Conversion Rate
              </h2>
              <h2>1.34</h2>
            </div>
            <div className="flex w-full justify-between pt-8">
              <h2 className="flex gap-3 mb-7">
                <ArrowRight />
                Transfer Method
              </h2>
              <h2>RTGS</h2>
            </div>
            <div className="flex w-full justify-between pt-8">
              <h2 className="flex gap-3 mb-7">
                <Calendar />
                Transfer Date
              </h2>
              <h2>{fechaActual}</h2>
            </div>
            <Separator className=" border-t border-dashed border-black h-0 mt-5" />
            <div className="flex justify-between mt-5">
              <h2>Mobile App</h2>
              <Link href="#">Bankdev Mobile App</Link>
            </div>
            <div className="   flex items-center justify-center mt-5">
              <Image
                className="  h-auto justify-center  dark:brightness-[0.6]"
                width={300}
                height={150}
                alt="NextUI Fruit Image with Zoom"
                src="/fasdfa.jpg"
              />
            </div>
            <Button className="flex w-full text-center mt-5 font-black ">
              Confirm
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Transfersa;
