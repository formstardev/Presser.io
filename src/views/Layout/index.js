import React from "react";
import Header from "../../component/home/header";
import Sidebar from "../../component/home/sidebar";
import RightBar from "../../component/home/rightBar";
import Footer from "../../component/home/footer";


const Layout = ({children}) => {
    
    return (
        <>
            <div className="">
                <Header                   
                />
            </div>
            <div className="mt-[0px] flex bg-[#212529]">
                <div className="">
                    <Sidebar/>
                </div>
                <div className="w-full sm:w-auto mt-[20px] mx-2 sm:ml-[150px] ">                           
                    {children}
                </div>
                <div className="ml-[80px] mr-3 mt-[35px] md:block hidden ">
                    <RightBar/>
                </div>
            </div>
            <div className="sm:hidden block fixed bottom-0 w-full">
                <Footer/>
            </div>
        </>
    )
}
export default Layout;