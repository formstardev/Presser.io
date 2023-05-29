import React from "react";
const Register = () => {
    return (
        <div className="sm:bg-[#edeff1] bg-[#f4f4f4] min-h-screen justify-center flex">
            <div className="relative flex flex-col mt-0 justify-center items-center">
                <div className="w-[330px]">
                    <figure className="sm:block" >
                        <img className="" src="/images/presser_final-logo.png" alt=""></img>
                    </figure> 
                    <p className="text-[34px] mt-[30px] font-medium normal color-[#000] w-full">Create your Account</p>
                    <div className="mt-[44px] ml-[22px] w-[287px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        <p className="text-[18px] color-[#000] font-normal text-left">Full Name</p>&nbsp;&nbsp;
                        <input className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" type="text" aria-label="FullName" placeholder=""></input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        <p className="text-[18px] color-[#000] font-normal text-left">E-mail</p>&nbsp;&nbsp;
                        <input className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" type="email" aria-label="FullName" placeholder=""></input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        <p className="text-[18px] color-[#000] font-normal text-left">Password</p>&nbsp;&nbsp;
                        <input className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" type="password" aria-label="FullName" placeholder=""></input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        <p className="text-[18px] sm:w-[146px] color-[#000] font-normal text-left">Confirm Password</p>&nbsp;&nbsp;
                        <input className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" type="password" aria-label="FullName" placeholder=""></input>
                    </div>
                    <div className="mt-[61px] flex items-center justify-center">
                    <button class="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[35px] w-[121px] text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Register
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;