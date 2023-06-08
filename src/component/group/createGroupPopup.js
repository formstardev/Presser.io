import React, { useState, useRef } from "react";
import { XIcon, PhotographIcon } from '@heroicons/react/outline';

const CreateGroupModal = (props) => {
    const { isOpen, setIsOpen } = props;
    const [previewUrl, setPreviewUrl] = useState("http://placehold.it/180");
    const fileInputRef = useRef();
    const [name, setName ] = useState('');
    const [privacy, setPrivacy] = useState('');
    const currentDate = new Date().toLocaleDateString;
    const newGroup = {group_name:'', group_logo:'', update_time:'' ,privacy:''};


    const handleButtonClick = () => {
        fileInputRef.current.click();
      };
    
      /**Preview Grouplogo icon */
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
         setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };
    /**Save new Group data */
    const saveGroupData = () => {
        newGroup.group_name = name;
        newGroup.group_logo = previewUrl; 
        newGroup.update_time = currentDate;
        newGroup.privacy = privacy;
        setName('');
        setPrivacy('');
        setIsOpen(false)
        return newGroup;
    }
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#373c40] border border-white border-opacity-10 rounded-lg overflow-hidden shadow-xl max-w-md sm:w-full w-full">
          <div className="flex flex-col">
            <div className="flex justify-between items-center bg-[#373c40] px-4 py-2">
              <p className="text-white text-sm font-bold">Create New Group</p>
              <button
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 bg-[#373c40] ">
                <div className=" mb-4">
                    <p className="text-white text-sm font-bold mr-4">Name</p>
                    <input 
                        type="text"
                        id="last_name" 
                        className="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Name Your Group "
                        onChange={(e) =>setName(e.target.value)} 
                        required/>
                </div>
                <div className="flex justify-between mb-4">
                    <p className="text-white text-[14px] font-bold mr-4">Cover Photo</p>
                    <p className="text-white text-[12px] font-light">Optional</p>
                </div>

                    <div className="flex items-center">
                        <div className="flex items-center justify-center flex-col">
                            <input
                                ref={fileInputRef}
                                className="hidden"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-w-80 w-20 h-20 rounded-lg"
                            />
                        </div>
                    <div className="mr-2 float-left" onClick={handleButtonClick}>
                        <PhotographIcon className="h-10 w-10 text-blue-500 " />
                    </div>
                    <p className="text-white text-sm font-light">Add Cover Photo</p>
                </div>
                <div className="mt-2 mb-4">
                    <p className="text-white text-sm font-bold mr-4">Privacy</p>
                    <input 
                        type="text"
                        id="last_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 mt-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Your Privacy" 
                        onChange={(e) => setPrivacy(e.target.value)}
                        required/>
                </div>
                <div className="mt-2 flex justify-center items-center">
                    <button 
                        className="bg-[#3f85e3] rounded-lg px-9 py-1 text-[20px] text-white"
                        onClick={saveGroupData}
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;