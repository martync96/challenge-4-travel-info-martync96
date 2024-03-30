const FavouriteLocationsAsArray = () => {

    const locationArray = localStorage.getItem('favouriteLocations') ? JSON.parse(localStorage.getItem('favouriteLocations')) : [];

    return locationArray;
}

export default FavouriteLocationsAsArray;