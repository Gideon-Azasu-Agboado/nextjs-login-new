import React, { useState } from "react";
import { IoIosSpeedometer } from 'react-icons/io'
import { RiLayout5Line } from 'react-icons/ri'
import { BsChevronRight, BsBook } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const SideMenu = () => {
    const [open, isOpen] = useState(false)

    const openNav = () => {
        isOpen(!open)
    }

    return (
        <div>
            <div className="hidden lg:block">
                <div className="h-screen w-[17vw] bg-slate-800">
                    <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">CORE</h1>

                    <div className="flex flex-row  items-center pt-[2em] pl-[1.5em]">
                        <IoIosSpeedometer size={25} color='#e4e4e4' />
                        <h2 className="text-[#e4e4e4] text-[1.6rem] pl-[0.5em]">Dashboard</h2>
                    </div>

                    <div>
                        <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">INTERFACE</h1>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em] justify-between">
                            <div className="flex flex-row items-center ">
                                <RiLayout5Line size={25} color='#94a3b8' />
                                <h2 className="text-slate-400 text-[1.5rem] pl-[0.5em]">Layouts</h2>
                            </div>
                            <div className="pr-[1.5em]">
                                <BsChevronRight size={21} color='#94a3b8' />
                            </div>
                        </div>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em] justify-between">
                            <div className="flex flex-row items-center ">
                                <BsBook size={25} color='#94a3b8' />
                                <h2 className="text-slate-400 text-[1.5rem] pl-[0.5em]">Pages</h2>
                            </div>
                            <div className="pr-[1.5em]">
                                <BsChevronRight size={21} color='#94a3b8' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">ADDONS</h1>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em]">
                            <RiLayout5Line size={25} color='#94a3b8' />
                            <h2 className="text-slate-400 text-[1.5rem] pl-[0.5em]">Charts</h2>
                        </div>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em]">
                            <BsBook size={25} color='#94a3b8' />
                            <h2 className="text-slate-400 text-[1.5rem] pl-[0.5em]">Tables</h2>
                        </div>
                    </div>

                    <div className="h-[10vh] w-[17vw] bg-slate-700 absolute bottom-0 pl-[1em] pt-[10px] xl:pt-[1.5em]">
                        <p className="text-[1.3rem] text-slate-400">
                            Logged in as:
                        </p>
                        <p className="text-[1.5rem] text-slate-400">
                            Start Bootstrap                    </p>
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className="fixed right-[30px] top-11 z-[2000]" onClick={openNav}>
                    {
                        open
                            ?
                            <AiOutlineClose size={30} color='#fafafa' />
                            :
                            <AiOutlineMenu size={30} color='#0f172a' />
                    }
                </div>

                <div className={
                    open
                        ?
                        "fixed h-screen top-0 left-0 bottom-0 right-0 w-full bg-slate-800 transition-[left] ease-in duration-300 z-[1000]"
                        :
                        "fixed h-screen top-0 left-[-100%] bottom-0 right-0 w-full transition-[left] ease-in duration-300 bg-slate-800 z-[1000]"
                }>

                    <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">CORE</h1>

                    <div className="flex flex-row  items-center pt-[2em] pl-[1.5em]">
                        <IoIosSpeedometer size={23} color='#e4e4e4' />
                        <h2 className="text-[#e4e4e4] text-[1.5rem] pl-[0.5em]">Dashboard</h2>
                    </div>

                    <div>
                        <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">INTERFACE</h1>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em] justify-between">
                            <div className="flex flex-row items-center ">
                                <RiLayout5Line size={23} color='#94a3b8' />
                                <h2 className="text-slate-400 text-[1.4rem] pl-[0.5em]">Layouts</h2>
                            </div>
                            <div className="pr-[30px]">
                                <BsChevronRight size={19} color='#94a3b8' />
                            </div>
                        </div>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em] justify-between">
                            <div className="flex flex-row items-center ">
                                <BsBook size={23} color='#94a3b8' />
                                <h2 className="text-slate-400 text-[1.4rem] pl-[0.5em]">Pages</h2>
                            </div>
                            <div className="pr-[30px]">
                                <BsChevronRight size={19} color='#94a3b8' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-slate-500 text-[1.1rem] pt-[50px] pl-[1.5em]">ADDONS</h1>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em]">
                            <RiLayout5Line size={23} color='#94a3b8' />
                            <h2 className="text-slate-400 text-[1.4rem] pl-[0.5em]">Charts</h2>
                        </div>

                        <div className="flex flex-row items-center pt-[2em] pl-[1.5em]">
                            <BsBook size={23} color='#94a3b8' />
                            <h2 className="text-slate-400 text-[1.4rem] pl-[0.5em]">Tables</h2>
                        </div>
                    </div>

                    <div className="h-[100px] w-screen bg-slate-700 absolute bottom-0 pl-[1em] pt-[10px] xl:pt-[1.5em]">
                        <p className="text-[1.3rem] text-slate-400">
                            Logged in as:
                        </p>
                        <p className="text-[1.5rem] text-slate-400">
                            Start Bootstrap                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;