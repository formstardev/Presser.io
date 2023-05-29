import React from "react";

const Veryfication =() => {
    return (
        <div className="bg-[#E5E5E5] sm:bg-[#E5E5E5] min-h-screen justify-center items-center flex">
            <div className="relative container mt-0 flex flex-col items-center justify-center h-full">
                <figure className="mt-[0] sm:block hidden">
                    <img src="/images/presser_final-logo.png" alt=""></img>
                </figure>
                <figure className="mt-[20px] sm:hidden block">
                    <img src="/images/blue.png" alt=""></img>
                </figure>
                <figure className="mt-[85px] sm:block hidden">
                    <img src="/images/des.png" alt=""></img>
                </figure>
                <figure className="mt-[45px] sm:hidden block">
                    <img className="w-[311px]" src="/images/des (1).png" alt=""></img>
                </figure>   
                <figure className="sm:mt-[59px] mt-[121px]">
                    <img src="/images/Group1475.png" alt=""></img>
                </figure>
                <button class="bg-transparent w-[327px] mt-[108px] hover:bg-blue-500 text-blue-500 text-[16px] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Go checking my email
                </button>             
            </div>
        </div>
    )
}
export default Veryfication;