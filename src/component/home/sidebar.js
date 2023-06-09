import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  HomeIcon
} from '@heroicons/react/outline'
import { FiBell, FiMail, FiSettings } from 'react-icons/fi'
import { FaUser, FaUsers } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom';

let navigation = [
  { name: 'Home', to: '/home', icon: HomeIcon, current: true },
  { name: 'Message', to: '/message', icon: FiMail, current: false },
  { name: 'Groups', to: '/group', icon:FaUsers, current: false },
  { name: 'Notifications', to: '#', icon: FiBell, current: false },
  { name: 'Profile', to: '#', icon: FaUser, current: false },
  { name: 'Settings', to: '#', icon: FiSettings, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const history = useHistory();

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
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-[#3F85E3] bg-opacity-20 text-[#3F85E3]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex bg-[#373C40] items-center sm:w-[210px] px-2 py-2 text-[19px] font-bold rounded-md'
                    )}
                    onClick={() => {
                      const updatedNavigation = navigation.map((navItem) => {
                        if (navItem.name === item.name) {
                          return { ...navItem, current: true }
                        } else {
                          return { ...navItem, current: false }
                        }
                      })
                      navigation = updatedNavigation
                      history.push(item.to); // navigate to the specified link
                    }}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-[#3F85E3]' : 'text-white group-hover:text-gray-300',
                        'mr-3 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
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