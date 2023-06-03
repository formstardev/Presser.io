/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  HomeIcon,
  XIcon,
} from '@heroicons/react/outline'
import { FiBell, FiMail, FiSettings } from 'react-icons/fi'
import { FaUser, FaUsers } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Message', href: '#', icon: FiMail, current: false },
  { name: 'Groups', href: '#', icon:FaUsers, current: false },
  { name: 'Notifications', href: '#', icon: FiBell, current: false },
  { name: 'Profile', href: '#', icon: FaUser, current: false },
  { name: 'Settings', href: '#', icon: FiSettings, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-[#212529]">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden block"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 mr-12 pt-2">
                  <button
                    className="ml-1 sm:hidden block flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-[#3F85E3] text-[#3F85E3]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-[#3F85E3]' : 'text-gray-400 group-hover:text-gray-300',
                          'mr-4 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0 " >
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-col mt-[37px] mx-[41px] bg-[#212529] space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-[#3F85E3] bg-opacity-20 text-[#3F85E3]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex bg-[#373C40] items-center sm:w-[210px] px-2 py-2 text-[19px] font-bold rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-[#3F85E3]' : 'text-white group-hover:text-gray-300',
                        'mr-3 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className='mt-4 ml-[34px] flex flex-col justify-center items-center'>
                <button 
                    className=' bg-[#3f85e3] w-[210px] flex flex-col justify-center items-center mt-[1px] hover:bg-blue-500 text-white font-medium text-[16px] font-semibold hover:text-white py-2 border hover:bg-[#497DBE] sm:hover:bg-[#497DBE] border-blue-500 hover:border-transparent rounded'
                    type='button'
                >
                    <img src='/images/mic.png' className='' alt=''></img>                   
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
