import React from "react";
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart,AiOutlineHeart } from 'react-icons/ai';

const TrendingComponent = (props) => {
    return (
        <div className="sm:w-full h-[230px] bg-[#373c40]  rounded-md border border-white border-opacity-10 ">
            <div className="flex my-2">
                <div className="mx-3 my-1">
                    <div className="w-[55px] flex justify-center items-center h-[22px] rounded-lg bg-[#3f85e3]">
                        <AiOutlineHeart size={20} className="text-white"/>
                        <p className="text-white text-[12px]">{props.tdata.price}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[#c6c6c6] text-[12px]">
                        {props.tdata.name}
                    </p>
                </div>
            </div>
            <div className="mx-4 my-4 flex justify-between">
                <figure>
                    <img src={props.tdata.src} alt="" className="rounded-md w-[125px] h-[103px]"></img>
                </figure>
                <div className="w-[383.69px] flex flex-col">
                    <div className="flex float-left items-center">
                        <p className="text-[#edeff1] text-[14px] font-[medium]">{props.tdata.title}</p>
                    </div>
                    <div className="flex float-left items-center">
                        <p className="text-[#edeff1] text-[12px] text-opacity-60 font-normal">{props.tdata.time}</p>
                    </div>
                    <div className="flex float-left items-center">
                        <p className="text-[14px] font-normal text-[#edeff1] py-1">{props.tdata.content}</p>
                    </div>
                </div>                
            </div>
            <div className='mt-5 flex justify-between mx-3 gap-2'>
                <div className='ml-2 flex justify-between hover:cursor-pointer'>
                    <AiTwotoneHeart className='w-6 h-6 text-[#3F85E3]'/>
                    <p className='text-[14px] text-white'>10 Likes</p>
                </div>
                <div className='flex justify-between hover:cursor-pointer'>
                    <FiMessageSquare className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>5 comments</p>
                </div>                
                <div className='flex justify-between hover:cursor-pointer'>
                    <IoMdRepeat className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>Re-post</p>
                </div>                
                <div className='flex justify-between mr-2 hover:cursor-pointer'>
                    <RiShareBoxLine className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>Share</p>
                </div>                
            </div>
        </div>
    )
}
export default TrendingComponent;