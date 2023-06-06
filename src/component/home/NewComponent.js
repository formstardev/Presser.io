import React from "react";
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';

const NewComponent = (props) => {
    return (
        <div className="sm:w-full w-11/12 mx-4">
            <div className="sm:w-full w-full min-h-fit py-2 bg-[#373c40]  rounded-md border border-white border-opacity-10 ">
                <div className="sm:mx-4 sm:my-4 mx-2 my-2 flex justify-between">
                    <figure>
                        <img src={props.ndata.src} alt="" className="rounded-md sm:w-[125px] sm:h-[103px] w-full"></img>
                    </figure>
                    <div className="sm:w-[367.69px] w-full mx-4 flex flex-col">
                        <div className="flex float-left items-center">
                            <p className="text-[#edeff1] sm:text-[14px] text-[10px] font-[medium]">{props.ndata.title}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className="text-[#edeff1] sm:text-[12px] text-[8px] text-opacity-60 font-normal">{props.ndata.time}</p>
                        </div>
                        <div className="flex float-left items-center">
                            <p className="sm:text-[14px] text-[9px] font-normal text-[#edeff1] py-1">{props.ndata.content}</p>
                        </div>
                    </div>                
                </div>
                <div className='sm:mt-5 mt-2 flex justify-between mx-3 gap-2'>
                    <div className='ml-2 flex justify-between hover:cursor-pointer'>
                        <AiTwotoneHeart className='sm:w-6 sm:h-6 w-4 h-4 text-[#3F85E3]'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>10 Likes</p>
                    </div>
                    <div className='flex justify-between hover:cursor-pointer'>
                        <FiMessageSquare className='sm:w-6 sm:h-6 w-4 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>5 comments</p>
                    </div>                
                    <div className='flex justify-between hover:cursor-pointer'>
                        <IoMdRepeat className='sm:w-6 sm:h-6 w-4 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>Re-post</p>
                    </div>                
                    <div className='flex justify-between mr-2 hover:cursor-pointer'>
                        <RiShareBoxLine className='sm:w-6 sm:h-6 w-4 h-4 text-white'/>
                        <p className='sm:text-[14px] text-[12px] text-white'>Share</p>
                    </div>                
                </div>
            </div>
        </div>
    )
}
export default NewComponent;