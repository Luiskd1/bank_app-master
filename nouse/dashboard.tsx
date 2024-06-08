"use client";
import useApi from "@/hooks/useApi";
import React from "react";
import TransferRecent from "./transferRecent";
import Cardchart from "../app/dashboard/chard";
import Accounts from "./accounts";
import Cards from "../app/dashboard/cards";

interface Bankschemadata {
  id: number;
  cedula: number;
  name: string;
  user_id: string;
  created_at: string;
  saldo: number;
}

const Dashboard = () => {
  const { data: datauser, isLoading } = useApi();

  return (
    <div>
      {!isLoading && (
        <div
          className=" w-full flex p-5 gap-5 "
          style={{ height: "calc(100vh - 60px)" }}
        >
          {/* <h1 className='text-2xl font-bold uppercase'>WELCOME {datauser?.data.session?.user.user_metadata.name}</h1>
          <h3 className='text-xl pt-3 text-gray-400'>Check your banking activity in one place</h3> */}

          <div className=" hidden sm:flex w-2/3 gap-5 flex-col">
            < Cards/>

            <div className=" hidden sm:block justify-center items-center h-2/3">
              <Cardchart />
            </div>
          </div>

          <div className="  w-full sm:flex sm:w-1/3 justify-center items-center gap-5 flex-col  ">
            <div className="flex w-full h-2/6 sm:h-2/5 justify-center ">
              <Accounts />
            </div>

            <div className=" w-full h-2/4  sm:mt-0  sm:h-3/5 justify-center">
              <TransferRecent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
