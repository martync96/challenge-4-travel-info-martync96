import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from '../src/pages/WeatherPage';
import { expect } from 'vitest';

describe('WeatherPage Tests', () => {

    const favouriteLocations = [{ location: 'London' }];
    const alreadyFavourited = false;

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route path="weather/:location" element={<WeatherPage favouriteLocations={favouriteLocations} alreadyFavourited={alreadyFavourited}/>} />
                </Routes>
            </Router>
        )
    })

    // test('click to remove from favourites is shown if location is in favourites', () => {
    //     //arrange

    //     //act
    //     const removeFromFavourites = screen.getByText('Click to remove from favourites');
    //     //assert
    //     expect(removeFromFavourites).toBeInTheDocument();
        
    // }); Doesn't work.

    test ('addToFavourites increases favouritedLocations length by 1', () => {
        //arrange
        
        //act

        //assert
    });
});