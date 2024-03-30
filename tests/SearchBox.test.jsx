import SearchBox from "../src/components/SearchBox";
import { render, fireEvent, screen, act } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { beforeEach } from "vitest";


vi.mock('axios');

beforeEach(() => {
    render(
        <Router>
            <SearchBox />
        </Router>
    );
});

describe(`searchbox Tests`, () => {

    test('searchbox renders ErrorMessage on error', async () => {
        
        axios.get.mockImplementationOnce(() =>   //mock axios get
            Promise.reject(new Error('Test error')) //reject promise 
        );

        const input = screen.getByPlaceholderText('Search');
        const button = screen.getByText('Search');

        fireEvent.change(input, { target: { value: 'test' } }); //change input value to test
        await act(async () => {
            fireEvent.click(button);
        }); //click the search button with test value

        expect(screen.getByText('Sorry, location not found')).toBeInTheDocument();
    });

    test('searchbox navigates to weather page on successful search', async () => {

        axios.get.mockImplementationOnce(() => //mock axios get
            Promise.resolve({ data: { city: { name: 'London' } } }) //resolve promise with data
        );

        const input = screen.getByPlaceholderText('Search');
        const button = screen.getByText('Search');

        fireEvent.change(input, { target: { value: 'London' } }); //change input value to test
        await act(async () => {
            fireEvent.click(button);
        }); //click the search button with test value

        expect(window.location.pathname).toBe('/weather/London');
    });
});