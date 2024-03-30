import NavBar from '../src/components/NavBar';
import HomePage from '../src/pages/HomePage';
import WeatherPage from '../src/pages/WeatherPage';
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { beforeEach, expect } from 'vitest';

describe(`navbar Tests`, () => {
    
    const favouriteLocations = [{ location: 'London'}];

    beforeEach(() => {
        render(
            <Router>
                <NavBar favouriteLocations={favouriteLocations}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="weather/:location" element={<WeatherPage />} />
                </Routes>
            </Router>
        );
    });
    
    test('nav-item dropdown should only render if favouriteLocations is not empty', () => {
        //act
        const dropdown = screen.getByText('My Saved Locations').closest('li'); //grabs the parent li of the dropdown
       
        //assert
        expect(dropdown).toBeInTheDocument();
        expect(dropdown).toHaveClass('nav-item dropdown');
        expect(dropdown).not.toHaveClass('favourites-dropdown-hidden');
    });

    test('clicking on home navigates to home (/)', () => {
        //act
        expect(screen.getByText('Home')).toBeInTheDocument();

        //assert
        fireEvent.click(screen.getByText('Home'));
        expect(screen.getByText('Tell Me About..')).toBeInTheDocument();
        
    });

    test('clicking on a location in my saved locations page navigates', ()=> {
        //arrange
        expect(screen.getByText('London')).toBeInTheDocument();
        
        //act
        fireEvent.click(screen.getByText('London')); 

        //assert
        expect(window.location.pathname).toBe('/weather/London');
    })
});