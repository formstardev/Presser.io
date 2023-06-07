import React from "react";
import { GrStar } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import HashtagGroup from "./hashtagsgroup";
const RightBar = () => {
    const hashtagslist = [
        {name:'#Photography', category:'new'},
        {name:'#Natural', category:'new'},
        {name:'#Wildlife', category:'new'},
        {name:'#Toronto', category:'new'},
        {name:'#Canada', category:'new'},
        {name:'#Wildeneses', category:'best'},
        {name:'#Photography', category:'best'},
        {name:'#Photography', category:'best'},
        {name:'#Photography', category:'best'},
    ];
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
            <div className="mt-[35px] sm:w-[328px] rounded-lg md:md-[328px] border border-white border-opacity-10 bg-[#373c40] min-h-fit py-2">
                <div className="border-b border-white border-opacity-20">
                    <div className="flex px-2 py-3 justify-between items-center mx-2 ">
                        <p className="text-[#f8f9fa] text-[19px] font-bold">
                            Popular Hashtags
                        </p>
                    </div>
                </div>
                <div>
                    <HashtagGroup bdata={hashtagslist}/>
                </div>                
            </div>
            <div className="mt-[35px] sm:w-[328px] rounded-lg md:md-[328px] border border-white border-opacity-10 bg-[#373c40] min-h-fit py-2">
                <div className="border-b border-white border-opacity-20 px-4 py-3 ">
                    <p className="text-[#3f85e3] text-[19px] font-bold">Trending Hashtags</p>
                </div>
                <div className="">
                    <HashtagGroup bdata={hashtagslist}/>
                </div>
            </div>
        </>
    )
}
export default RightBar;