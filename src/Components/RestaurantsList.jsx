import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleSlider from './FoodSlider';

const RestaurantList = ({ token }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const navigate = useNavigate()
  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(`https://staging.fastor.in/v1/m/restaurant?city_id=118&&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setRestaurantData(data);
    } catch (error) {
      console.error('Error occurred while fetching restaurant data:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchRestaurantData();
    }
    else{
        token = localStorage.getItem("token")
        fetchRestaurantData();
    }
  }, [token]);

  const handleShare = (name, imageUrl, description) => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: description,
        url: imageUrl,
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error in sharing:', error));
    } else {
      console.log('Web Share API not supported in this browser.');
    }
  };

  const handleLogout = () =>{
    navigate('/');
   localStorage.clear()
  }

  return (
    <div className='restaurant-wrapper'>
      
      <div className='logout-button' onClick={handleLogout}>
        <img  className="share-img" src="https://cdn-icons-png.flaticon.com/512/152/152535.png" alt="" />
        </div>
        <div className='location-wrap'>
      <h2>Restaurants</h2> <br />
      <img className="fastor-logo" src="https://static.startuptalky.com/2021/05/fastor-logo-startuptalky.jpg" alt="" />
      </div>
      <div className='location-wrap'>
        <img className="share-img" src="https://cdn-icons-png.flaticon.com/512/1248/1248333.png" alt="" />
        <p className='grey small'>Connaught place, Delhi</p>
      </div>
      <br />
      <SimpleSlider />
      <br />
      <h3 className='grey text-glow zoom'>Lets explore this evening ... with below restaurants near you</h3>
      <div className='restaurants-grid'>
        {restaurantData.map((restaurant) => (
          <div key={restaurant.restaurant_id}>
           
            <img className='same-img' src={restaurant.images[0].url} alt={restaurant.restaurant_name} onClick={() => handleShare(restaurant.restaurant_name, restaurant.images[0].url, restaurant.avg_cost_for_two)} />
            <div className='restaurant-name-rating'>
              <p>{restaurant.restaurant_name}</p>
            <p className='grey small'><small><i>popularity: &#9733;{restaurant.rating.restaurant_avg_rating} </i></small></p>
            </div>
            <div className='restaurant-name-rating'>
            <p className='small grey'>Cost for two {restaurant.currency.symbol}{restaurant.avg_cost_for_two}</p>
            <img className="share-img" onClick={() => handleShare(restaurant.restaurant_name, restaurant.images[0].url, restaurant.avg_cost_for_two)} src="https://scontent.fgau3-3.fna.fbcdn.net/v/t39.30808-6/305931617_447005584132547_2821403551334281616_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tIWGer8tK9YAX_OkrTz&_nc_ht=scontent.fgau3-3.fna&oh=00_AfC721Lxga8iE8IuLiVF4J3bWvnKUi_L1RaBGQgxSOSCEQ&oe=654D4131" alt="" />
            </div>
            
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default RestaurantList;
