import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import dfLogo from '../assets/df_logo.png';

const Navbar = (props) => {

    const [dropdown, setDropdown] = useState(false);
    const [hasLocations, setHasLocations] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setHasLocations(props.favouriteLocations && props.favouriteLocations.length > 0)
    }, [props.favouriteLocations]);


    const handleDropdown = () => {
        setDropdown(!dropdown); //sets dropdown menu to opposite of current state
    };

    const favouriteLocations = props.favouriteLocations.map((data, index) => (
        <a key={index} className="dropdown-item" onClick={() => navigateWeather(data.location)}>
            {data.location}
        </a>
    ));

    const navigateWeather = async (location) => {
        navigate(`/weather/${location}`); //passes weather data to the location object
    }

    const navigateHome = () => { navigate('/') }

    const navigateToFavouriteLocations = () => {
      navigate('/favourites');
  
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src={dfLogo}/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link home-link" href="#" onClick={navigateHome}>
                  Home
                </a>
              </li>
              <li className={`nav-item dropdown ${hasLocations ? '' : 'favourites-dropdown-hidden'}`}> {/* if hasLocations is set then create dropdown for favourites */}
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded="false" onClick={handleDropdown}>
                  My Saved Locations
                </a>
                  <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                    {favouriteLocations}
                    <a className="faveLocations" onClick={navigateToFavouriteLocations}>Favourite Locations </a>
                  </div>
                </li>
            </ul>
            <div className="ml-auto searchbox">
              {window.location.pathname === '/' ? '' : <SearchBox className="form-inline my-2 my-lg-0" />} {/* if on home page then show search box */}
            </div>
          </div>
        </nav>
      );
}

export default Navbar;
