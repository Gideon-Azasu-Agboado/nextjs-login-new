import React from "react";
import { RiLayout5Line } from 'react-icons/ri'
import { BsChevronRight, BsBook } from 'react-icons/bs'

const Card = ({ name, color, id }) => {
    return (
        <div className={`h-[170px] w-full lg:w-[24%] ${color} mt-8 rounded-lg`}>
            <h3 className="pt-8 pl-6 text-slate-50 text-[1.5rem]">{name}</h3>

            <div className="flex flex-row items-center pt-[2em] pl-[1.5em] justify-between">
                <h2 className="text-slate-50 text-[1.3rem]">View Details</h2>
                <div className="pr-[1.5em]">
                    <BsChevronRight size={21} color='#ffffff' />
                </div>
            </div>
        </div>


    )
}

export default Card;