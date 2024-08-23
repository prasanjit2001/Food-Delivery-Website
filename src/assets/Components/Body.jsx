import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState ,useEffect} from "react";

const Body = () => {
    const [listOfRes,setlistOfRes]=useState([]);
    const [filteredRest,setFilteredRest]=useState([]);
    const[serachText,setSearchText]=useState("");
    
     useEffect(()=>{
       fetchData();
       
     },[]);
    
     const fetchData=async()=>{
       const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      
         setlistOfRes(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         setFilteredRest(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         
      };
    

      const onlineStatus=useOnlineStatus();
      if(onlineStatus===false) return <h1>Looks Like You Are Offline</h1>
      if(listOfRes.length===0){
        return <Shimmer/>;
      }
     

    return (
      <div className='body'>
        <div className='filter flex'>
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={serachText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={()=>{
              // filter the rest card update the ui
              const filteredRes= listOfRes.filter((res)=>res.info.name.toLowerCase().includes(serachText.toLowerCase()));
              setFilteredRest(filteredRes);
            }}>Search</button>
          </div>
          <div className=" search m-4 p-4 flex items-center" >
          <button className="px-4 py-2  bg-purple-200 rounded-lg"
            onClick={()=>{
                // setlistOfRes();
             const filterRes=listOfRes.filter(res=>res.info.avgRating>4.5);
             setlistOfRes(filterRes);
            }}>Top Rated Resturant</button>
            
          </div>
            
        </div>
        <div className='flex'>
         <RestaurantCard resData={filteredRest}/>
          
          
        </div>
      </div>
    );
  };
  export default Body;