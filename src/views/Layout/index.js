import React from "react";
import Header from "../../component/home/header";
import Sidebar from "../../component/home/sidebar";
import RightBar from "../../component/home/rightBar";


const Layout = ({children}) => {
    
    return (
        <>
            <div className="">
                <Header                   
                />
            </div>
            <div className="mt-[0px] flex bg-[#212529]">
                <Sidebar/>
                <div className="mt-[20px] sm:ml-[150px]">                           
                    {children}
                </div>
                <div className="ml-[80px] mt-[35px] sm:block hidden">
                    <RightBar/>
                </div>
            </div>
        </>
    )
}
export default Layout;