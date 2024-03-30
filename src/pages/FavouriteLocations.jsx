import FavouriteLocation from "../components/FavouriteLocation.jsx";
import favourited from "../assets/unfavourited.png";

const FavouriteLocations = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <div className="locationHeader">
                        <h1>Tell you about..</h1>
                        <h1>Favourite Locations</h1>
                    </div>
                    <div className="favouriteInfo">
                        <p>Click <img src={favourited}/> to remove from favourites</p>
                        <p>Click for more information</p>
                    </div>
                    <FavouriteLocation />
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
}

export default FavouriteLocations;