import React from "react";
import { FaSearch } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Header = () => {
    return (
        <div className="bg-[#212529] border-b-2 border-gray-100 border-opacity-10">
            <div className="flex justify-between items-center mx-[40px]">
                <div className="flex flex-col sm:block hidden justify-center items-center">
                    <figure>
                        <img className="" src="/images/light.png" alt=""></img>
                    </figure>
                </div>
                <div className="rounded-lg sm:w-[550px]">
                    <form className="w-full flex md:ml-0" action="/" method="GET">
                        <label htmlFor="search_field" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full  text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                <FaSearch className="mx-[5px] h-5 w-5" aria-hidden="true" />
                            </div>
                            <input
                                id="search_field"
                                name="search_field"
                                className="block bg-[#8D969D] bg-opacity-20 sm:rounded-lg rounded-full sm:w-[450px] h-full pl-8 pr-3 py-2 border-transparent text-[#8D969D] placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                placeholder="Search Presser"
                                type="search"
                            />
                        </div>
                    </form>
                </div>
                <div className="ml-4 md:ml-6 rounded-full my-[10px] md:w-[190px] bg-[#373C40]">
                    {/* Profile dropdown */}
                    <Menu as="div" className=" relative rounded-full">
                        {({ open }) => (
                        <>
                          <div className="">
                            <Menu.Button className=" max-w-xs bg-[#373C40] flex rounded-full items-center text-sm lg:p-2 lg:rounded-full lg:hover:bg-opacity-70">
                                <img
                                className="h-10 w-10 rounded-full border border-[2px] border-[#3f85e3] "
                                src="/images/human/men-photo.png"
                                alt=""
                                />
                                <span className="hidden ml-3 text-sm font-medium lg:block">
                                    <p className="text-white">Mathew</p>                                   
                                    <p className="text-sm text-[#3F85E3]">@matt.smith</p>
                                </span>
                                
                                <ChevronDownIcon
                                    className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                    aria-hidden="true"
                                />
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
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Your Profile
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Settings
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Logout
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
        </div>
    )
}
export default Header;