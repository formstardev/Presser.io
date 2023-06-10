import React, { useState } from "react";
import { Link } from "react-router-dom";
import Usericon from "../../../assets/img/Icon/user.png";
import Emailicon from "../../../assets/img/Icon/email.png";
import Passwordicon from "../../../assets/img/Icon/password.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Register = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const validate = () =>{

        if (!fullname.trim()) {
            errors.fullName = "Full name is required";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password should be at least 6 characters long";
        }

        if (!confirmPassword) {
            errors.confirmPassword = "Confirm password is required";
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (validate()) {
    //         // Submit the form
    //         history.push("/home")
    //     }
    // } 
    return (
        <div className="sm:bg-[#edeff1] bg-[#f4f4f4] min-h-screen justify-center flex">
            <div className="sm:block hidden relative sm:flex sm:flex-col sm:mt-0 sm:justify-center sm:items-center">
                <form className="w-[330px] mt-[30px]" action="/verification">
                    <figure className="sm:block" >
                        <img className="" src="/images/presser_final-logo.png" alt=""></img>
                    </figure> 
                    <p className="text-[34px] mt-[30px] font-medium normal color-[#000] w-full">Create your Account</p>
                    <div className="mt-[44px] ml-[22px] w-[287px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        {/* <p className="text-[18px] w-fit-content color-[#000] font-normal text-left">Full Name</p> */}
                        <input 
                            className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none" 
                            type="text" 
                            aria-label="FullName" 
                            placeholder="Full Name"
                            onChange={(e) =>setFullName(e.target.value)}
                            required>                            
                        </input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        {/* <p className="text-[18px] color-[#000] font-normal text-left">E-mail</p> */}
                        <input 
                            className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none" 
                            type="email" 
                            aria-label="Email" 
                            placeholder="Email Address"
                            onChange={(e) =>setEmail(e.target.value)}
                            required
                            >
                        </input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        {/* <p className="text-[18px] color-[#000] font-normal text-left">Password</p> */}
                        <input 
                            className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none" 
                            type="password" 
                            aria-label="Password" 
                            placeholder="Password"
                            onChange={(e) =>setPassword(e.target.value)}
                            required>
                        </input>
                    </div>
                    <div className="mt-[26px] ml-[22px] flex items-center border-b border-[#000] border-light py-2 mr-[22px] ">
                        {/* <p className="text-[18px] sm:w-[146px] color-[#000] font-normal text-left">Confirm Password</p> */}
                        <input 
                            className="appearance-none ml-[5px] mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                            type="password" 
                            aria-label="Password" 
                            placeholder="Confirm Password"
                            onChange={(e) =>setConfirmPassword(e.target.value)}
                            required
                            >
                        </input>
                    </div>
                    <div className="mt-[61px] flex items-center justify-center">
                        <button 
                            className="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[35px] w-[131px] text-sm border-4 text-white py-1 px-2 rounded" 
                            type="submit"
                            onClick={() => validate()}>
                                Register
                        </button>
                    </div>
                </form>
            </div>
        
            <div className="sm:hidden block relative flex-col flex mt-0 justify-center items-center">
                <form className="flex flex-col justify-center items-center" action="/verification">
                    <figure className="mt-[40px]">
                        <img src="/images/blue.png" alt=""></img>
                    </figure>
                    <figure className="mt-[40px]">
                        <img className="float-left" src="/images/Create your account.png" alt=""></img>
                    </figure>
                    <div className="mt-[44px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Usericon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                        className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                        name="name"
                        type="text" 
                        aria-label="FullName" 
                        placeholder="Full Name"
                        required
                        ></input>
                    </div>
                    <div className="mt-[24px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Emailicon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                        className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                        type="email" 
                        name="email"
                        aria-label="Email" 
                        placeholder="Email Address"
                        required
                        ></input>
                    </div>
                    <div className="mt-[24px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Passwordicon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                        className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                        name="password"
                        type="password"                       
                        placeholder="Password"
                        required
                        ></input>
                    </div>
                    <div className="mt-[24px] ml-[22px] w-[287px] flex items-center border-b border-[#5B59D6] border-light py-2 mr-[22px] ">
                        <figure className="">
                            <img src={Passwordicon} className=" text-[18px] color-[#000] font-normal focus:fill-[#5B59D6]" alt=""></img>    
                        </figure>&nbsp;&nbsp;
                        <input 
                        className="appearance-none mr-[10px] bg-transparent border-none text-gray-700 focus:outline-none mr-[22px]" 
                        type="password" 
                        aria-label="password" 
                        placeholder="Confirm Password"
                        required
                        ></input>
                    </div>
                    <div className="mt-[61px] flex items-center justify-center">
                        <button 
                        className="flex-shrink-0 bg-[#3f85e3] hover:bg-teal-700 border-[#3f85e3] hover:border-teal-700 h-[52px] w-[327px] text-[16px] font-medium border-4 text-white py-1 px-2 rounded rounded-xl" 
                        type="submit"
                        // onClick={(e) => handleSubmit(e) }
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-[61px] flex items-center justify-center">
                    <p className="text-[14px] text-[#868686]">Do you have an account? &nbsp;
                        <Link to="/login">
                            <button className="text-[#3F85E3] font-bold">Login</button>
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Register;