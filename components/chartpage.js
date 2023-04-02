import React from "react";
import Card from "./card";
import SideMenu from "./sidemenu";
import BarChart from "./barchart";
import AreaChart from "./areachart";
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaTable } from 'react-icons/fa'
import DataTables from "./table";

const ChartPage = () => {
    return (
        <div className="flex flex-row">
            <SideMenu />

            <div className="mt-[106px] lg:mt-0 px-[1.6em] h-screen w-full bg-white overflow-y-scroll ease-in duration-300">
                <div className="lg:hidden fixed top-0 pb-[10px] pt-[36px] w-full bg-white">
                    <h1 className="text-[1.7rem]">Dashboard</h1>
                </div>

                <h1 className="hidden lg:block text-[3rem]">Dashboard</h1>

                <div className="h-[55px] lg:h-[60px] w-full bg-gray-100 rounded-lg pt-3 text-[1.3rem] mt-3 lg:mt-2 pl-6">
                    <p className=" text-slate-400">Dashboard</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <Card name='Primary Card' color='bg-blue-600' />
                    <Card name='Primary Card' color='bg-yellow-400' />
                    <Card name='Primary Card' color='bg-green-600' />
                    <Card name='Primary Card' color='bg-red-700' />
                </div>

                <div className="flex flex-col lg:flex-row mt-7 justify-between">
                    <div className="h-[400px] w-full lg:w-[49%] bg-white border-2 border-gray-300">
                        <div className="h-[70px] w-full bg-gray-50 pt-3 pl-6 border-b-2 border-gray-300 flex flex-row items-center">
                            <AiOutlineBarChart size={25} color='#1e293b' />
                            <h5 className="text-[1.3rem] lg:text-[1.5rem] pl-2">Area Chart Example</h5>
                        </div>
                        <div>
                            <AreaChart />
                        </div>
                    </div>

                    <div className="h-[400px] w-full lg:w-[49%] bg-white border-2 border-gray-300 mt-5 lg:mt-0">
                        <div className="h-[70px] w-full bg-gray-50 pt-3 pl-6 border-b-2 border-gray-300 flex flex-row items-center">
                            <AiOutlineBarChart size={25} color='#1e293b' />
                            <h5 className="text-[1.3rem] lg:text-[1.5rem] pl-2">Bar Chart Example</h5>
                        </div>
                        <div>
                            <BarChart />
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white border-2 border-gray-300 mt-[8em] mb-[2em]">
                    <div className="w-full bg-gray-50 pt-3 pl-6 border-b-2  border-gray-300 flex flex-row items-center">
                        <FaTable size={20} color='#1e293b' />
                        <h5 className="text-[1.3rem] lg:text-[1.5rem] pl-2">DataTables Example</h5>
                    </div>
                    <div>
                        <DataTables />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChartPage;