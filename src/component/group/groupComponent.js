import React from "react";
import { useHistory } from "react-router-dom";

const GroupComponent = (props) => {
  const history = useHistory();
  return (
    <div className="bg-[#373c40] mt-3 sm:w-full sm:min-h-fit w-11/12 rounded-md py-2 border border-white border-opacity-10 hover:md:cursor-pointer"
          onClick={() => history.push('/group/groupchat')}>
      <div className="flex">
        <div className="mx-2 my-2">
          <div>
            <figure>
              <img src={props.gdata.group_logo} alt="" />
            </figure>
          </div>
        </div>
        <div className="mx-1 my-2">
          <div className="">
            <p className="sm:text-[16px] text-[#fdfdfd] font-medium">{props.gdata.group_name}</p>
          </div>
          <div className="">
            <p className="sm:text-[14px] text-[#fdfdfd] font-medium">Updated {props.gdata.update} ago</p> 
          </div>       
        </div> 
      </div> 
    </div>)
}

export default GroupComponent;