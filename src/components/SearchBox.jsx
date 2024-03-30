import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage.jsx';
import axios from 'axios';

const SearchBox = ( {className}) => {

    const [search, setSearch] = useState(''); 
    const [error, setError] = useState(false); //error message to be displayed if API call fails.
    const navigate = useNavigate();

    const searchForLocation = async (e) => 
    {
        e.preventDefault(); //prevents page from reloading on submission https://stackoverflow.com/questions/50193227/basic-react-form-submit-refreshes-entire-page
        try{
            const response = await axios.get(`http://api.openweathermap.org//data/2.5/forecast?q=${search}&appid=9ab396b1eeb18a2d3e5aaf280537e941`)
            navigate(`/weather/${response.data.city.name}`); //passes city name from API call if successful. 
        }catch (error){
            console.error('Error fetching data:', error);
            setError(true);
        }
    } // not working for searchbox in navbar.

    // const searchForLocationNavbar = async () =>
    // {
    //     try{
    //         const response = await axios.get(`http://api.openweathermap.org//data/2.5/forecast?q=${search}&appid=9ab396b1eeb18a2d3e5aaf280537e941`)
    //         navigate(`/weather/${response.data.city.name}`); //passes city name from API call if successful. 
    //     }catch (error){
    //         console.error('Error fetching data:', error);
    //         setError(true);
    //     }
    // }

    // const checkURL = (e) => {
    //     window.location.pathname === '/?' ? searchForLocation(e) : searchForLocationNavbar();
    // }

    const setSearchItem = (e) => 
    {
        setSearch(e.target.value.trim());
    }

    return (
        <div>
        <form className={`${className} `} onSubmit={searchForLocation}>
            <input className="form-control mr-sm-2 mb-2 search-box" type="search" placeholder="Search" aria-label="Search" onChange={setSearchItem} />
            <button className="btn btn-dark my-2 my-sm-0" type="submit" >Search</button>
            {error ? <ErrorMessage error={error} /> : null}
        </form>
    </div>
    );
}

export default SearchBox;
