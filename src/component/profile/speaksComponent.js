import React, { Fragment } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdRepeat } from 'react-icons/io';
import { RiShareBoxLine } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';

 const SpeaksComponent = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const profileData  = [ 
        {src:'/images/human/men-photo.png', background_src:'/images/mountain_1.png', nickname:'matt.smith', uploadtime:'7:23PM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/women.png', background_src:'', nickname:'witty_alice', uploadtime:'8:6AM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
        {src:'/images/human/men-photo.png', background_src:'', nickname:'matt.smith', uploadtime:'7:23PM', content:'Went on a wild hike this afternoon and was able to capture this amazing shot of the surrounding mountains during sunset. #nature '},
    ];
    return (
        <>
        {profileData.map((data, index) =>        
            <div key={index} className='w-11/12 sm:mx-0 mx-3 flex flex-col justify-center items-center sm:w-full mt-5 min-h-fit py-2 rounded-md bg-[#373C40] border border-white border-opacity-30'>
                <div className='' >
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className=''>
                                    <figure>
                                        <img src={data.src} alt='' className=' mx-2 my-2'></img>
                                    </figure>
                                </div>
                                <div>
                                    <p className='text-[#3F85E3] sm:text-[14px] text-[12px] my-2'>{data.nickname}
                                        
                                    </p>
                                    <p className='sm:text-[12px] text-[10px] text-[#C6C6C6] '>{data.uploadtime}</p>
                                </div>
                                <div className='mt-2 mx-3'>
                                    <img src="/images/light.png" alt='' className='w-full h-[26.8px]'></img>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 md:ml-6 rounded-full my-[10px] md:w-[190px] bg-[#373C40]">
                    {/* Profile dropdown */}
                    <Menu as="div" className="float-right">
                        {({ open }) => (
                        <>
                          <div className="">
                            <Menu.Button className=" max-w-xs bg-[#373C40] flex items-center text-sm lg:rounded-full mx-2 lg:hover:bg-opacity-70">
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
                                className=" absolute mt-2 w-[76px] rounded-md text-white bg-[#8d969d] shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                        <p className='mx-5 my-2 sm:text-[14px] text-[9px] font-normal text-white'>
                            {data.content} 
                        </p>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center'>
                        <figure className='sm:w-full w-11/12'>
                            <img className='w-full' src={data.background_src} alt=''></img>
                        </figure>
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
        
        </div>)}
        </>
        
    )
 }
 export default SpeaksComponent;