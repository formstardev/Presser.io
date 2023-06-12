import React from "react";
import { FiMail, FiPlusCircle } from "react-icons/fi";

const SimpleProfileComponent = () => {
    return (
        <>
            <div className="sm:w-full flex flex-col">
                <div className="mt-2 w-full ">
                    <figure className="w-full">
                        <img src="/images/profile/photography.png" alt="" className="w-full"></img>
                    </figure>
                </div>
                <div className="mt-2 w-full flex justify-between mx-2 ">
                    <div className="flex ">
                        <div className="my-2">
                            <figure>
                                <img className="mx-1 my-1 w-20 h-20" src="/images/human/man-4.png" alt=""></img>
                            </figure>
                        </div>
                        <div className="ml-3">
                            <p className="text-white font-bold text-[24px]">Matthew Smith</p>
                            <p className="mt-1 text-[#8d969d] text-light text-[14px]">Photographer</p>
                            <p className="text-[#8d969d] text-light text-[18px]">@matt.smith</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <div className="flex justify-between mx-7">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-white text-[20px] font-medium">56</p>
                                <p className="text-white text-[12px] font-light">Speaks</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-white text-[20px] font-medium">1,136</p>
                                <p className="text-white text-[12px] font-light">Followers</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-white text-[20px] font-medium">123</p>
                                <p className="text-white text-[12px] font-light">Following</p>
                            </div>
                        </div>
                        <div className="flex relative my-3 justify-end items-center">
                            <button className="mx-1 rounded-md px-5 py-2 bg-blue-500 text-white text-[14px] flex items-center justify-center">
                                <FiMail className="mx-2 text-white text-[16px]"/>
                                Message
                            </button>
                            <button className="mx-3 rounded-md px-5 py-2 bg-blue-500 text-white text-[14px] flex items-center justify-center">
                                <FiPlusCircle className="mx-2 text-white text-[16px]"/>
                                Follow
                            </button>
                        </div>
                    </div>                   
                </div>
                <p className="text-white my-3 text-[14px]">
                    Hi, my name is Matt and I am a photographer from Toronto specializing in nature photography. Check out my portfolio at mattsmithphoto.com!
                </p>
            </div>
        </>
    )
} 
export default SimpleProfileComponent;