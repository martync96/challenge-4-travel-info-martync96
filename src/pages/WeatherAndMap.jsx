import WeatherInformation from '../components/WeatherInformation.jsx';
import Map from '../components/Map.jsx';

const WeatherAndMap = () => {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8">
                    <h1>Telling you about..</h1>
                    <h2>Placename</h2>
                    <p>⭐ Click to add to favourites</p>
                    <div className="row">
                        <div className="col-6">
                            <WeatherInformation/>
                        </div>
                        <div className="col-6">
                            <Map/>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
}

export default WeatherAndMap;