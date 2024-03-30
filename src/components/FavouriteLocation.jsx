import { useNavigate } from "react-router-dom";
import favourited from "../assets/unfavourited.png";

const FavouriteLocation = () => {

  const navigate = useNavigate();

    const locationArray = localStorage.getItem('favouriteLocations') ? JSON.parse(localStorage.getItem('favouriteLocations')) : []; 

    const removeFromFavourites = (location) => {
      const newLocationArray = locationArray.filter((data) => data.location !== location); //create new array containing all locations except one passed
      localStorage.setItem('favouriteLocations', JSON.stringify(newLocationArray)); //save new array to local storage
      window.location.reload(); //refresh page
    }

    const navigateWeather = async (location) => {
      navigate(`/weather/${location}`); //passes weather data to the location object
    }

    const favouriteLocations = locationArray.map((data, index) => (
        <div key={index} className="col-4 favLocations">
          <img src={favourited} onClick={() => removeFromFavourites(data.location)} alt="Favourited" />
          <p className="fav-loc-tem" onClick={() => navigateWeather(data.location)}>{data.location}</p>
        </div>
      ));      

    return (
        <div className="row">
            {favouriteLocations}
        </div>
    );
}

export default FavouriteLocation;