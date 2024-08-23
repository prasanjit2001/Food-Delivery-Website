
import { Link } from 'react-router-dom';
import { CDN_URL } from '../../utils/constants';
import { useContext } from 'react';
import UserContext from '../../utils/UserContext';


const RestaurantCard = ({ resData }) => {
  const {loggedInUser}=useContext(UserContext);
  return (
    <div className='flex flex-wrap'>
      {/* Map over the resData array to render each restaurant card */}
      {resData && resData.map((restaurant) => (
       
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
          <div className='res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-blue-200'>
            <img className="rounded-lg" src={`${CDN_URL}${restaurant?.info?.cloudinaryImageId}`} alt="Restaurant" />
            <h3 className="font-bold py-1 text-lg">Name: {restaurant?.info?.name}</h3>
            <h4>Cuisines: {restaurant?.info?.cuisines.join(", ")}</h4>
            <h4>Star: {restaurant?.info?.avgRating}</h4>
            <h4>Cost: {restaurant?.info?.costForTwo}</h4>
            <h4>User:{loggedInUser}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCard;
