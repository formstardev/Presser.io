import React from "react";

import Sidebar from "../sidebar";
import Header from "../../home/header";
import Footer from "../../home/footer";

const DashboardLayout = ({children}) => {
    return (
            <>
                <div className="">
                    <Header />
                </div>
                <div className="mt-[0px] flex bg-[#212529]">
                    <div className="">
                        <Sidebar/>
                    </div>
                    <div className="w-full sm:w-auto mt-[20px] mx-2 sm:ml-[50px] ">                           
                        {children}
                    </div>                    
                </div>
                <div className="sm:hidden block fixed bottom-0 w-full">
                    <Footer/>
                </div>
            </>
    )
}
export default DashboardLayout;