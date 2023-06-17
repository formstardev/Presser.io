import React from "react";
import { useState, useRef } from "react";
import {
  Collapse,
  Card,
  CardBody
} from "@material-tailwind/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { FiEdit2 } from "react-icons/fi";
import { TiTick } from "react-icons/ti"
  
export default function Account() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(cur => !cur);
  const [infoShow, setInfoShow] = useState('block');
  const [inputShow, setInputShow] = useState('hidden');
  const [selectedItem, setSelectedItem] = useState(null);
  const nameRef = useRef(null);
  const handleSubmitInfo = (item) => {
    setInfoShow('hidden')
    setInputShow('block')
    setSelectedItem(item);
  };
  const handleSaveInfo = () => {
    setInfoShow('block')
    setInputShow('hidden')
    setSelectedItem(null);
  };
  const [name,setName] = useState('@Alice10');
  const [phoneNumber, setPhoneNumber] = useState('+1 657-254-7496');
  const [email, setEmail] = useState('abandonraj@gmail.com');
  const [password, setPassword] = useState('123456')


  /**User information */
  let userInfo = 
                {
                    name:name,
                    phone_number:phoneNumber,
                    email:email,
                    password:password,                    
                }
 
  return (
 
    <>
      <div className="md:w-[517px] justify-between">
        <div className="flex justify-between mx-3 py-4">
          <p className="text-white font-bold">Account</p>
          <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
            {!open ?
              <FiChevronDown className="text-white" onClick={toggleOpen}/>
              :
              <FiChevronUp className="text-white" onClick={toggleOpen}/>
            }
          </div>
        </div>
        <Collapse open={open}>
          <Card className="w-full bg-[#373c40] mx-auto">
            <CardBody>
              <div className="mx-3 mt-2 flex justify-between">
                <div className="font-bold">
                  <p className="md:text-[12px] text-[#6C6C6C]">Username</p>
                  <p className={`${selectedItem === 'name' ? infoShow : 'block'} md:text-[15px] text-white py-2`}>{userInfo.name}</p>
                  <input
                    className={`${selectedItem === 'name' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light text-white border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    required                    
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'name' ?
                    <TiTick
                    className="hover:cursor-pointer text-white text-[22px]"
                    onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className="hover:cursor-pointer text-white"
                      onClick={() => handleSubmitInfo('name')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-3 flex justify-between">
                <div className="font-bold">
                  <p className="md:text-[12px] text-[#6C6C6C]">Phone</p>
                  <p className={`${selectedItem === 'phone_number' ? infoShow : 'block'} py-2 md:text-[15px] text-white`}>{userInfo.phone_number}</p>
                  <input
                    className={`${selectedItem === 'phone_number' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light text-white border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'phone_number' ?
                    <TiTick
                    className="hover:cursor-pointer text-white text-[22px]"
                    onClick={handleSaveInfo}
                    />
                    :
                    
                    <FiEdit2 
                      className="hover:cursor-pointer text-white"
                      onClick={() => handleSubmitInfo('phone_number')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-2 flex justify-between py-2">
                <div className="font-bold">
                  <p className="md:text-[12px] text-[#6C6C6C]">Email</p>
                  <p className={`${selectedItem === 'email' ? infoShow : 'block'} py-2 md:text-[15px] py-2 text-white`}>{userInfo.email}</p>
                  <input
                    className={`${selectedItem === 'email' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light text-white border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="text"
                    ref={nameRef}
                    value={userInfo.email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'email'?
                    <TiTick
                    className="hover:cursor-pointer text-white text-[22px]"
                    onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className="hover:cursor-pointer text-white"
                      onClick={() => handleSubmitInfo('email')}
                    />
                  }
                </div>
              </div>
              <div className="mx-3 mt-2 mb-4 flex justify-between py-2">
                <div className="font-bold">
                  <p className="md:text-[12px] text-[#6C6C6C]">Password</p>
                  <p className={`${selectedItem === 'password'? infoShow : 'block'} py-2 md:text-[15px] text-white`}>*********</p>
                  <input
                    className={`${selectedItem === 'password' ? inputShow : 'hidden'} bg-gray-700 bg-opacity-20 font-light text-white border border-white border-opacity-10 rounded-md mt-2 focus:outline-none`}
                    type="password"
                    ref={nameRef}
                    value={userInfo.password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                  </input>
                </div>
                <div className="md:text-[14px] text-[#6C6C6C] flex justify-center items-center">
                  {infoShow === 'hidden' && selectedItem === 'password'?
                    <TiTick
                    className="hover:cursor-pointer text-white text-[22px]"
                    onClick={handleSaveInfo}
                    />
                    :                    
                    <FiEdit2 
                      className="hover:cursor-pointer text-white"
                      onClick={() => handleSubmitInfo('password')}
                    />
                  }
                </div>                
              </div>
            <p className="font-bold text-white mx-3 mt-2 text-[14px]">Security</p>
            <p className="font-bold text-white mx-3 mt-2 text-[14px]">Deactivate your Account</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  );
}