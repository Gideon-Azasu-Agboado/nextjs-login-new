import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const Login = () => {
    return (
        <div className="bg-[#F5EBE0] h-full w-full sm:h-screen sm:w-full relative flex justify-center items-center">

            <div className="w-[90%] h-[7.3in] mt-[8em] sm:w-[80%] sm:h-[65%] md:w-[80%] md:h-[60%] lg:w-[35%] lg:h-[49%] xl:w-[35%] xl:h-[65%] mb-[70px] bg-[#FEFCF3] m-auto rounded-2xl relative">

                <div className="h-[140px] w-[140px] lg:h-[100px] lg:w-[100px] xl:h-[180px] xl:w-[180px] bg-[#FDF7EC] m-auto rounded-full shadow-lg mt-[-4em] flex justify-center items-center">
                    <div className="relative h-[110px] w-[110px] lg:h-[70px] lg:w-[70px] xl:h-[150px] xl:w-[150px]">
                        <Image src='/padlock.png' alt="padlock-image" layout="fill" className="m-auto" />
                    </div>
                </div>

                <h1 className="text-[2.2rem] lg:text-[1.2rem]xl:text-[2.2rem] text-center text-[#B78880] pt-[1.2em] px-4 font-pacifico">Log Into Your Dashboard</h1>

                <div className="mx-[2em] xl:mx-[5em] mt-[2em]">
                    <div>
                        <label className="block text-[1.7rem]  text-[#DBA39A] pl-1 font-raleway">Username</label>
                        <input type='text' id="user_name" className="w-full bg-[#F9EEEF] h-[60px] lg:h-[40px] xl:h-[60px] rounded-2xl mt-[0.5em] text-[1.3rem] lg:text-[1rem] xl:text-[1.3rem] pl-[1em] text-[#DBA39A] focus:outline-[#EDD0CD] focus:border-solid focus:border-2 block" placeholder="Eg: John123"></input>
                    </div>

                    <div className="pt-[1.5em]">
                        <label className="block text-[1.7rem]  text-[#DBA39A] pl-1 font-raleway">Password</label>
                        <input type='password' id="pass_word" className="w-full bg-[#F9EEEF] h-[60px] lg:h-[40px] xl:h-[60px] rounded-2xl mt-[0.5em] text-[1.3rem] lg:text-[1rem] xl:text-[1.3rem] pl-[1em] text-[#DBA39A] focus:outline-[#EDD0CD] focus:border-solid focus:border-2 block" placeholder="Eg: xxxxxx"></input>
                    </div>

                    <div className="flex justify-end mt-[1em] xl:mt-[0.5em]">
                        <Link href='#' className="text-blue-500 text-[1.1rem] lg:text-[0.6rem] xl:text-[1.1rem]">Forgot password?</Link>
                    </div>

                    <div className="relative mb-[8em} sm:mb-0">
                        <button className="h-[60px] lg:h-[40px] xl:h-[60px] w-[40%] lg:w-[30%] xl:w-[40%] bg-[#E1B2AB] transition-all duration-500 hover:duration-500 hover:bg-[#DBA39A] hover:transition-all rounded-lg ml-[30%] lg:ml-[35%] xl:ml-[30%] mt-[2em] text-[1.5rem] xl:text-[1.5rem] lg:text-[1.2rem] text-[#FEFCF3]">
                            <Link href="/chartpage">Login</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;