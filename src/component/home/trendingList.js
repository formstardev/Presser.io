import React from "react";
 
/**import components */
import TrendingComponent from "./trendingComponent";
const TrendingList = () => {
    const trendinglist = [
        {name:'Trending in #technology', src:'/images/cybertrack/cybertruck_1.png',price:'1.8k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {name:'No. 1 in #automobiles, #cars', src:'/images/cybertrack/cybertruck_2.png',price:'3.4k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
        {name:'Trending in #technology', src:'/images/cybertrack/cybertruck_3.png',price:'3.2k', title:'What you need to know about Tesla’s Cybertruck', time:'35 min ago', content: 'Economic Times - Last year, Elon Musk unveiled the Tesla Motors Cybertruck, at the Tesla design studio after which it went viral for its striking design and its...'},
    ]
    return (
        <>              
            {trendinglist.map((tdata,index) => 
                <div key={index} className="mt-3">
                    <TrendingComponent tdata={tdata}/>
                </div>
            )
            }
        </>
    )
}
export default TrendingList;