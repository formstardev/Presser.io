import React from "react";
import { 
  FaLinkedin,
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcStripe,
  FaCcVisa,
  FaCcPaypal,
  FaCreditCard
} from "react-icons/fa";

    

const Landing = () => {
  return (
    <div className="bg-[#3d5b81] min-h-screen justify-center flex">
      <div className="relative container mt-0 m-auto mb-[0px] flex flex-col items-center justify-center h-full">
        <figure className="mt-[40px] sm:hidden block" >
          <img className="" src="/images/light.png" alt=""></img>
        </figure> 
        <figure className="sm:mt-[40px] sm:block hidden" >
          <img className="" src="/images/logo.png" alt=""></img>
        </figure>
        <figure className="mt-0 sm:max-w-full mt-[30px] flex flex-col items-center">
          <img className="sm:w-3/6 w-3/6" src="/images/friends.png" alt=""></img>
        </figure>
        <div className="text-center text-white sm:text-[20px] text-[12px]">
          <p className="sm:ml-[30px] sm:mr-[30px]">A social network championing freedom of expression, freedom of individuals and the free flow of internet data.</p>
          <p className="text-[24px]">Everybody's welcome.</p>
        </div>
        <div className="">
            <h1 className="text-center text-white font-bold sm:text-[42px] text-[28px] mb-[20px]">Coming Soon</h1>
            <div className="flex bg-white rounded rounded-3xl p-0.5 sm:w-[406px]">
              <input type="text" className="ml-1.5 rounded-l-3xl bg-white text-grey-800 block focus:outline-none focus:ring-1 focus:ring-white flex-1 min-w-0 w-full text-sm p-1.5" placeholder="Enter your email" />
              <button className="rounded rounded-2xl text-white bg-[#3f85e3] hover:bg-[#fae57f] focus:outline-none focus:ring-1 focus:ring-white font-medium rounded-full text-xs p-2 text-center">Notify me</button>
            </div>
        </div>
        <div className="my-[30px] text-[16px] text-white">
          <p className="mb-1 text-center">Share on social Media</p>
          <div className="flex flex-row gap-5 justify-center">
            <FaFacebookSquare size={20}/>
            <FaLinkedin size={20}/>
            <FaPinterestSquare size={20}/>
            <FaTwitterSquare size={20}/>
            <FaInstagramSquare size={20}/>
          </div>
        </div>
        <div className="">
          <button className="flex m-auto text-[#3d5b81] bg-[#fae57f] sm:mt-[33.4px] mt-[50.7px] hover:bg-[#fae57e] focus:outline-none focus:ring-1 focus:ring-white font-medium rounded-full text-sm px-[16px] py-[3px] text-center">Donate</button>
          <div className="mt-3 flex flex-row gap-4 justify-center sm:mb-[40px] mb-[5px]">
            <FaCcAmazonPay size={25} color="#fae57f"/>
            <FaCcApplePay size={25} color="#fae57f"/>
            <FaCcMastercard size={25} color="#fae57f"/>
            <FaCcStripe size={25} color="#fae57f"/>
            <FaCcVisa size={25} color="#fae57f"/>
            <FaCcPaypal size={25} color="#fae57f"/>
            <FaCreditCard size={25} color="#fae57f"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing;