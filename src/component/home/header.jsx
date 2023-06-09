import React from "react";
import { FaSearch } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  

const Header = ({isDarkMode, toggleDarkMode}) => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setIsDarkMode(prevState => !prevState);
    // };
    return (
        <div className={`${isDarkMode ? 'bg-[#212529]' : 'bg-[#3D5B81]'}   border-b-2 border-gray-100 border-opacity-10`}>
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
                        <div className="relative w-full  focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                <FaSearch className={`${isDarkMode ? 'text-[#8D969D]': 'text-white'} mx-[5px] h-5 w-5`} aria-hidden="true" />
                            </div>
                            <input
                                id="search_field"
                                name="search_field"
                                className={`block ${isDarkMode ? 'bg-[#8D969D] text-[#8d969d] placeholder-gray-500' : 'bg-[#8D969D] bg-opacity-20 placeholder-white'} bg-opacity-20 sm:rounded-lg rounded-full sm:w-full w-10/12  h-full pl-8 pr-3 py-2 border-transparent text-[#8D969D]  focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"`}
                                placeholder="Search Presser"
                                type="search"
                            />
                        </div>
                    </form>
                </div>
                <div className="ml-4">
                    <button id="theme-toggle" 
                        onClick={toggleDarkMode} 
                        type="button"
                        className={`${isDarkMode ? 'text-gray-300 border-gray-300' : 'text-gray-800 border-gray-500'} border-2 rounded-lg text-sm p-0`}>
                            <svg id="theme-toggle-dark-icon"
                                className={`${isDarkMode ? 'hidden' : ''} md:w-5 md:h-5 w-3 h-3`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon"
                                className={`${isDarkMode ? '' : 'hidden'} md:w-5 md:h-5 w-3 h-3`} fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                    </button>
                    </div>
                <div className={`${isDarkMode ? 'bg-[#373C40]' : 'bg-[#3D5B81] bg-opacity-20'} ml-4 md:ml-6 rounded-full my-[10px] md:w-[190px] `}>
                    {/* Profile dropdown */}
                    <Menu as="div" className=" relative rounded-full">
                        {({ open }) => (
                        <>
                          <div className="">
                            <Menu.Button className={`max-w-xs ${isDarkMode ? 'bg-[#373C40]' : 'bg-[#3D5B81] bg-opacity-20'} flex rounded-full items-center text-sm lg:p-2 lg:rounded-full lg:hover:bg-opacity-70`}>
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