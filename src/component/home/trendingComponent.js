import React from "react";
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart,AiOutlineHeart } from 'react-icons/ai';

const TrendingComponent = (props) => {
    return (
        <div className="sm:w-full w-11/12 flex flex-col mx-4 justify-center items-center">
            <div className="sm:w-full min-h-fit py-2 bg-[#373c40]  rounded-md border border-white border-opacity-10 ">
                <div className="flex my-2">
                    <div className="sm:mx-3 sm:my-1 mx-2">
                        <div className="w-[55px] flex justify-center items-center h-[22px] rounded-lg bg-[#3f85e3]">
                            <AiOutlineHeart size={20} className="text-white"/>
                            <p className="text-white sm:text-[12px] text-[10px]">{props.tdata.price}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-[#c6c6c6] sm:text-[12px] text-[10px]">
                            {props.tdata.name}
                        </p>
                    </div>
                </div>
                <div className="sm:mx-4 sm:my-4 mx-2 my-2 flex justify-between">
                    <figure>
                        <img src={props.tdata.src} alt="" className="rounded-md w-full md:w-[125px] md:h-[103px]"></img>
                    </figure>
                    <div className="md:w-[383.69px] w-full mx-2 flex flex-col">
                        <div className="flex float-left w-full items-center">
                            <p className="text-[#edeff1] md:text-[14px] text-[10px] font-[medium]">{props.tdata.title}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className="text-[#edeff1] sm:text-[12px] text-[10px] text-opacity-60 font-normal">{props.tdata.time}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className="sm:text-[14px] text-[9px] font-normal text-[#edeff1] py-1">{props.tdata.content}</p>
                        </div>
                    </div>                
                </div>
                <div className='sm:mt-5 mt-2 flex justify-between mx-3 gap-2'>
                    <div className='ml-2 flex justify-between hover:cursor-pointer'>
                        <AiTwotoneHeart className='sm:w-6 w-4 sm:h-6 h-4 text-[#3F85E3]'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>10 Likes</p>
                    </div>
                    <div className='flex justify-between hover:cursor-pointer'>
                        <FiMessageSquare className='sm:w-6 w-4 sm:h-6 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>5 comments</p>
                    </div>                
                    <div className='flex justify-between hover:cursor-pointer'>
                        <IoMdRepeat className='sm:w-6 w-4 sm:h-6 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>Re-post</p>
                    </div>                
                    <div className='flex justify-between mr-2 hover:cursor-pointer'>
                        <RiShareBoxLine className='sm:w-6 w-4 sm:h-6 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>Share</p>
                    </div>                
                </div>
            </div>
        </div>
    )
}
export default TrendingComponent;