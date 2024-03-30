import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WeatherInformation from "../components/WeatherInformation";
import favourited from "../assets/favourited.png";
import unfavourited from "../assets/unfavourited.png";

const WeatherPage = (props) => {

    const { location } = useParams();
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [alreadyFavourited, setAlreadyFavourited] = useState(false);

    useEffect(() => {
        axios.get(`http://api.openweathermap.org//data/2.5/forecast?q=${location}&appid=9ab396b1eeb18a2d3e5aaf280537e941`)
            .then((response) => {
                setCity(response.data.city.name);
                setWeatherData(response.data);
                const isAlreadyFavourited = checkForDuplicates(response.data, props.favouriteLocations);
                setAlreadyFavourited(isAlreadyFavourited);
            })
            .catch((error) => { console.error('Error fetching data:', error); })
    }, [location]);

    const addToFavourite = (weatherData, favouriteLocations) => {
        if (!checkForDuplicates(weatherData, favouriteLocations)) {
            const newLocation = { location: weatherData.city.name, country: weatherData.city.country };
            const newFavouriteLocations = [...favouriteLocations, newLocation];
            setAlreadyFavourited(true);
            localStorage.setItem('favouriteLocations', JSON.stringify(newFavouriteLocations));
            props.updateFavouriteLocations(newFavouriteLocations);
        }
    }

    const removeFromFavourites = (city) => {
        const newLocationArray = props.favouriteLocations.filter((data) => data.location !== city); //create new array containing all locations except one passed
        localStorage.setItem('favouriteLocations', JSON.stringify(newLocationArray)); //save new array to local storage
        props.setFavouriteLocations(newLocationArray);
        setAlreadyFavourited(false);
    }

    const checkForDuplicates = (weatherData, favouriteLocations) => {
        for (let i = 0; i < favouriteLocations.length; i++) {
            if (weatherData.city.name === props.favouriteLocations[i].location) {
                return true;
            }
        };
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="WeatherPageHeading">
                        <h1>Telling you about..</h1>
                        <h2>{city || 'Loading'}</h2>
                        {alreadyFavourited ? (
                            <>
                                <img src={favourited} onClick={() => removeFromFavourites(city)} alt="Favourited" />
                                <p>Click to remove from favourites</p>
                            </>
                        ) : (
                            <>
                                <img src={unfavourited} onClick={() => addToFavourite(weatherData, props.favouriteLocations)} alt="Favourited" />
                                <p>Click to add to favourites</p>
                            </>

                        )}
                    </div>
                    {Object.keys(weatherData).length > 0 ? <WeatherInformation weatherData={weatherData} /> : <p>Loading...</p>} {/* https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/ */}
                </div>
                <div className="col-2">
                </div>
            </div>

        </div>
    );
}

export default WeatherPage;