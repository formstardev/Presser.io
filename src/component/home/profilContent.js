import React, { Fragment } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';

 const ProfileContent = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const profileData  = [ 
        {src:'/images/human/men-photo.png', background_src:'/images/mountain_1.png', nickname:'matt.smith', uploadtime:'7:23PM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/women.png', background_src:'/images/mountain_1.png', nickname:'witty_alice', uploadtime:'8:6AM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/men-photo.png', background_src:'/images/mountain_1.png', nickname:'matt.smith', uploadtime:'7:23PM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
    ];
    return (
        <>
        {profileData.map((data, index) =>        
            <div key={index} className='w-full sm:w-full mt-5 h-[402px] rounded-md bg-[#373C40] border border-white border-opacity-30'>
                <div className='' >
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex justify-between w-full mr-[0px]'>
                                <div className=''>
                                    <figure>
                                        <img src={data.src} alt='' className='mx-2 my-2'></img>
                                    </figure>
                                </div>
                                <div>
                                    <p className='text-[#3F85E3] text-[14px] my-2'>{data.nickname}
                                        
                                    </p>
                                    <p className='text-[12px] text-[#C6C6C6] '>{data.uploadtime}</p>
                                </div>
                                <div className='mt-2 mr-1 ml-2'>
                                    <img src="/images/light.png" alt='' className=' h-[26.8px]'></img>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 md:ml-6 rounded-full my-[10px] md:w-[190px] bg-[#373C40]">
                    {/* Profile dropdown */}
                    <Menu as="div" className="float-right">
                        {({ open }) => (
                        <>
                          <div className="">
                            <Menu.Button className=" max-w-xs bg-[#373C40] flex rounded-full items-center text-sm lg:p-2 lg:rounded-full lg:hover:bg-opacity-70">
                                <img
                                className="h-1 w-4"
                                src="/images/dots.png"
                                alt=""
                                ></img>
                            </Menu.Button>
                            </div>
                            <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className=" absolute mt-2 w-[76px] rounded-md text-white bg-[#8d969d] shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] border-b border-white border-opacity-20'
                                    )}
                                    >
                                    Report
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] border-b border-white border-opacity-20'
                                    )}
                                    >
                                    See less
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-3 py-1 text-[12px] '
                                    )}
                                    >
                                    See more
                                    </a>
                                )}
                                </Menu.Item>
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>                    
                </div>
                    </div>
                    <div className='sm:w-[517.8px]'>
                        <p className='mx-5 my-2 text-[14px] font-normal text-white'>
                            {data.content} 
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <figure>
                            <img className='' src={data.background_src} alt=''></img>
                        </figure>
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
        
        </div>)}
        </>
        
    )
 }
 export default ProfileContent;