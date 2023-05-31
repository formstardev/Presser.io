import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';

 const ProfileContent = () => {
    return (
        <div className='w-[550px] mt-5 h-[402px] rounded-md bg-[#373C40] border-gray-400'>
            <div className='flex justify-between'>
                <div>
                    <div className='flex justify-between w-full mr-[0px]'>
                        <div className=''>
                            <figure>
                                <img src='/images/human/men-photo.png' alt='' className='mx-2 my-2'></img>
                            </figure>
                        </div>
                        <div>
                            <p className='text-[#3F85E3] text-[14px] my-2'>matt.smith
                                
                            </p>
                            <p className='text-[12px] text-[#C6C6C6] '>7:23PM</p>
                        </div>
                        <div className='mt-3 mr-1'>
                            <img src="/images/p.png" alt='' className=''></img>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <figure>
                        <img src='/images/dots.png' alt='' className='mt-3 mr-2'></img>
                    </figure>
                </div>
            </div>
            <div className='w-[517.8px]'>
                <p className='mx-5 my-2 text-[14px] font-normal text-white'>
                    Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature 
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <figure>
                    <img className='' src='/images/mountain_1.png' alt=''></img>
                </figure>
            </div>
            <div className='mt-5 flex justify-between gap-2'>
                <div className='ml-2 flex justify-between'>
                    <AiOutlineHeart className='w-6 h-6 text-[#3F85E3]'/>
                    <p className='text-[14px] text-white'>10 Likes</p>
                </div>
                <div className='flex justify-between'>
                    <FiMessageSquare className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>5 comments</p>
                </div>                
                <div className='flex justify-between'>
                    <IoMdRepeat className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>Re-post</p>
                </div>                
                <div className='flex justify-between mr-2'>
                    <RiShareBoxLine className='w-6 h-6 text-white'/>
                    <p className='text-[14px] text-white'>Share</p>
                </div>                
            </div>
        </div>
        
    )
 }
 export default ProfileContent;