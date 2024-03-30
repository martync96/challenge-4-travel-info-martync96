import React, { useEffect } from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import FavouriteLocations from "./pages/FavouriteLocations.jsx";
import WeatherAndMap from "./pages/WeatherAndMap.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from 'react-router-dom';

const App = () => {

    const [favouriteLocations, setFavouriteLocations] = useState([]);

    const updateFavouriteLocations = (newLocationArray) => {
        setFavouriteLocations(newLocationArray);
    }

    useEffect(() => {
    }, [favouriteLocations]);

    return (
        <div>
            <Navbar favouriteLocations={favouriteLocations} setFavouriteLocations={setFavouriteLocations} updateFavouriteLocations={updateFavouriteLocations}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/weather/:location" element={<WeatherPage favouriteLocations={favouriteLocations} setFavouriteLocations={setFavouriteLocations} updateFavouriteLocations={updateFavouriteLocations}/>} />
                <Route path="/favourites" element={<FavouriteLocations />} />
                <Route path="/map" element={<WeatherAndMap />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default App;
