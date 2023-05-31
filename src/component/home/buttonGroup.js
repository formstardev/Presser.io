import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io"
import ProfileContent from './profilContent';


const ButtonGroup = () => {
  const [activeTab, setActiveTab] = useState('#pills-with-brand-color-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const tabslist = [
    { Title: 'Breaking', id: 'breaking_id', data_hs_tab: "#pills-with-brand-color-1", aria_controls: "pills-with-brand-color-1"},
    { Title: 'Speaks', id: 'speaks_id', data_hs_tab: "#pills-with-brand-color-2", aria_controls: "pills-with-brand-color-2" },
    { Title: 'News', id: 'news_id', data_hs_tab:"#pills-with-brand-color-3", aria_controls: "pills-with-brand-color-3" },
    { Title: 'Trending', id: 'trending_id', data_hs_tab: "#pills-with-brand-color-4", aria_controls: "pills-with-brand-color-4" },
    { Title: 'Live', id: 'live_id', data_hs_tab: "#pills-with-brand-color-5", aria_controls: "pills-with-brand-color-5" },
    { Title: 'Channel', id: 'channel_id', data_hs_tab: "#pills-with-brand-color-6", aria_controls: "pills-with-brand-color-6" },
  ]

  return (
    <>
      <nav className="flex space-x-2 rounded-lg bg-[#373C40] px-2 py-2 border-[#8D969D] border-bold sm:w-[581px] border-1" aria-label="Tabs" role="tablist">
        {tabslist.map((tab,index)=>
        <button 
            key={index}
            type="button"
            className={`${
            activeTab === tab.data_hs_tab
              ? 'hs-tab-active:bg-[#3F85E3] hs-tab-active:text-white'
              : ''
          } py-3 px-4 sm:w-[83px] w-[53px] h-[33px] flex justify-center inline-flex items-center gap-2 bg-transparent sm:text-[14px] text-[12px] font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active`}
          id={tab.id}
          data-hs-tab={tab.data_hs_tab}
          aria-controls={tab.aria_controls}
          role="tab"
          onClick={() => handleTabClick(tab.data_hs_tab)}
        >
          {tab.Title}
        </button>
        )}       
      </nav>
      <div className="mt-[50px] flex flex-col items-center sm:float-right">
        
        <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
	        <input id="Toggle3" type="checkbox" className="hidden peer" />
	        <span className="px-4 py-2 text-white text-[12px] font-bold w-[117.06px] h-[26px] flex justify-center items-center rounded-l-md dark:bg-[#3F85E3] peer-checked:dark:bg-[#8D969D] peer-checked:dark:bg-opacity-20 ">Newest</span>
	        <span className="px-4 py-2 text-white text-[12px] font-bold w-[117.06px] h-[26px] flex justify-center items-center rounded-r-md dark:bg-[#8D969D] dark:bg-opacity-20 peer-checked:dark:bg-[#3F85E3]">Best</span>
        </label>
      </div>
      <div className="mt-3">
        <div
          id="breaking_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-1"
          className={`${activeTab === '#pills-with-brand-color-1' ? '' : 'hidden'}`}
        >  
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">Breaking</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            Breaking
          </p>
        </div>

        <div
          id="speaks_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-2"
          className={`${activeTab === '#pills-with-brand-color-2' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">Speaking</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            Speaking
          </p>
          <ProfileContent className="mt-5"/>
        </div>
        <div
          id="news_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-3"
          className={`${activeTab === '#pills-with-brand-color-3' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">News</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            News
          </p>
        </div>
        <div
          id="trending_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-4"
          className={`${activeTab === '#pills-with-brand-color-4' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">Trending</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            Trending
          </p>
        </div>
        <div
          id="live_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-5"
          className={`${activeTab === '#pills-with-brand-color-5' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">Live</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            Live
          </p>
        </div>
        <div
          id="channel_id"
          role="tabpanel"
          aria-labelledby="pills-with-brand-color-item-6"
          className={`${activeTab === '#pills-with-brand-color-6' ? '' : 'hidden'}`}
        >
        <div className="flex justify-left">
            <p className="text-[#3f85e3] text-[16px] font-normal ">Home</p>
            <IoIosArrowForward color="white" className="mt-1.5" />
            <span className="text-white text-[16px] font-normal">Channel</span>
        </div>
          <p className="text-[#fff] text-[34px] font-medium">
            Channel
          </p>
        </div>
      </div>
    </>
  );
}
export default ButtonGroup;