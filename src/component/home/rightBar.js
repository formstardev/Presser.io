import React from "react";
import { GrStar } from "react-icons/gr";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const RightBar = () => {
    const searchResultData = [
        {date:'23 January, 2021',searchTitle :`Fransa'da 15,5`},
        {date:'23 January, 2021',searchTitle :`14 Haziran'da`},
        {date:'23 January, 2021',searchTitle :`#diyanetkapatılsın`},
        {date:'23 January, 2021',searchTitle :`#KabineSınavıErteler`},
        {date:'23 January, 2021',searchTitle :`Travis Scott`},
        {date:'23 January, 2021',searchTitle :`Fransa'da 15,5`}
    ]
    return (
        <>
            <div>
                <div className="flex justify-between border border-opacity-30 border-white rounded-lg sm:w-auto md:w-[328px] bg-[#373c40] sm:h-[83px]">
                    <div className="float-left mx-4">
                        <div className="sm:mt-[16px]">
                            <figure>
                                <img src="/images/logo-white.png" alt="" className="w-[125px] h-[19px]"></img>
                            </figure>
                        </div>
                        <div className="mt-2">
                            <figure className="flex">
                                <GrStar className="fill-[#e28313]" size={15}/>
                                <GrStar className="fill-[#e28313]" size={15}/>
                                <GrStar className="fill-[#e28313]" size={15}/>
                                <GrStar className="fill-[#e28313]" size={15}/>
                                <GrStar className="fill-[#e28313]" size={15}/>
                                <GrStar className="fill-[#e28313]" size={15}/>
                            </figure>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[12px]">
                                Sponsered
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-[18px] text-[#3f85e3] hover:cursor-pointer">JOIN</p>
                    </div>
                    <div className="float-right mx-2 my-2">
                        <AiOutlineClose color="#8d969d" className="hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="mt-[35px] sm:w-auto rounded-lg md:md-[328px] border border-white border-opacity-10 bg-[#373c40] h-fit">
                <div className="border-b border-white border-opacity-20">
                    <div className="flex px-2 py-3 justify-between items-center mx-2 ">
                        <p className="text-[#f8f9fa] text-[19px] font-bold">
                            Previous Searches
                        </p>
                        <AiOutlineSetting size={20} className="fill-[#3f85e3] hover:cursor-pointer"/>
                    </div>
                </div>
                {searchResultData.map((sdata,index) =>
                <div key={index} className="py-2 flex justify-between border-b border-white border-opacity-20 items-center">
                    <div className="mx-4">
                        <p className="text-[13px] text-[#c6c6c6]">{sdata.date}</p>
                        <p className="text-[#f8f9fa] text-[15px] font-bold">{sdata.searchTitle}</p>
                    </div>
                    <IoIosArrowDown color="#c6c6c6" className="mx-4 hover:sm:cursor-pointer"/>
                </div>
                )}
                <div className="px-4 py-4">
                    <p className="text-[#3f85e3] text-[15px] hover:cursor-pointer">
                        Show more
                    </p>
                </div>
            </div>
            <div className="mt-[35px] sm:w-auto rounded-lg md:md-[328px] border border-white border-opacity-10 bg-[#373c40] h-fit">
                <div className="border-b border-white border-opacity-20 px-4 py-3 ">
                    <p className="text-[#3f85e3] text-[19px] font-bold">Popular Hashtags</p>
                </div>
                <div className="h-[300px]">
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default RightBar;