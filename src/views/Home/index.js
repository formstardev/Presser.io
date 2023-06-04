import React from "react";
import Header from "../../component/home/header";
import Sidebar from "../../component/home/sidebar";
import RightBar from "../../component/home/rightBar";



import ButtonGroup from "../../component/home/buttonGroup";

const Home = () => {
    return (
        <>
            <div className="">
                <Header className=""/>
            </div>
            <div className="mt-[0px] flex bg-[#212529]">
                <Sidebar/>
                <div className="mt-[20px] sm:ml-[150px]">                           
                    <ButtonGroup/>
                </div>
                <div className="ml-[80px] mt-[35px]">
                    <RightBar />
                </div>
            </div>
        </>
    )
}
export default Home;