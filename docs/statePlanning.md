# State Planning 

- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

## App.jsx
const [favouriteLocations, setFavouriteLocations] = useState([]);
favouriteLocations will be initialised as an empty array in App.jsx due to the fact that the favouriteLocations of a user may be changing constantly, it will be stored in app.jsx as it will need to be passed to multiple components and have callbacks used to update.

## Navbar
- const [dropdown, setDropdown] = useState(false);
A state for the dropdown menu will be held in the navbar component, state will be held in this component as it will persist on every page and directly interacts with elements in the component 

- const [hasLocations, setHasLocations] = useState(false);
Has locations is used as a state in NavBar to allow the navbar to show/hide the users favourited locations dropdown menu, it is a state because it will be changed constantly

## SearchBox
- const [search, setSearch] = useState('');
Search will be stored in SearchBox component due to the fact that all of the functionality for searching takes place in that component, it will be state because the onChange handler will be applied to the search box, meaning it will be updated constantly when in use

- const [error, setError] = useState(false); 


## Weather Page
- const [city, setCity] = useState('');
The state for city will be stored in the weather app and used to give the weatherPage information about the city currently displaying

- const [weatherData, setWeatherData] = useState({});
weatherData will be initialised as an empty array, it is state because it will need to change every time a user queries the website. 

- const [alreadyFavourited, setAlreadyFavourited] = useState(false);
alreadyFavourited will be a state because it will most likely be changing frequently whenever a user adds or removes a location from their favourites.
