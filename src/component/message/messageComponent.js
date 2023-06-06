import React from "react";

const MessageComponent = (props) => {
    return (
        <>
          <div className="mt-4 bg-[#373c40] min-h-fit py-2 sm:w-full w-full rounded-md border border-white border-opacity-10 w-11/12 ">
                <div className="flex mx-2">
                    <div className="mx-2 my-2">
                        <figure>
                            <img src={props.mdata.photo_src} alt="" className=""></img>
                        </figure>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex float-left">
                            <p className="sm:text-[16px] text-white font-medium">{props.mdata.name}</p>
                            <div className="mx-2 rounded-lg px-2 flex items-center justify-center py-1 bg-[#3f85e3]">
                                <p className=" text-white text-[10px]">{props.mdata.status}</p>
                            </div>
                        </div>
                        <div className="my-4 flex float-left">
                            <p className="text-white text-[12px]">{props.mdata.mcontent}</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2 flex-grow">
                        <p className="text-[#bebebe] text-[12px] font-normal float-right">
                            {props.mdata.time}
                        </p>
                    </div>
                </div>
          </div>
        </>
    )
}
export default MessageComponent;