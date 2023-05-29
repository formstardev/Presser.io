import React from "react";
import { ReactComponent as Presserfinal} from '../../../assets/img/svg/presser_final .svg'
import { ReactComponent as Presserfinal2} from '../../../assets/img/svg/presser_final 2.svg'


const Splash =() => {
    return (
        <div className="bg-[#212529] sm:bg-[#3d5b81] min-h-screen justify-center items-center flex">
            <div className="relative container mt-0 flex flex-col items-center justify-center h-full">
                <Presserfinal className="mb-0 hidden sm:block"/>
                 <p className="italic text-center text-white text-[14.2px] hidden sm:block mt-0">Free Press Free Speech</p>
                <Presserfinal2  className="sm:hidden"/>
            </div>
        </div>
    )
}
export default Splash;