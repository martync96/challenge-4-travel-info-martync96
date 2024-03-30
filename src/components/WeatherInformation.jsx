import ForecastBox from "./ForecastBox";

const WeatherInformation = (props) => {
    
    const weatherData = props.weatherData;

    const weatherHeading = weatherData.list.map((data, index) => (
        (index === 0) ? (
            <div key={index} className="weatherHeading">
                <h2>Today's Weather</h2>
                <p>{data.dt_txt.split(' ')[0].split('-').reverse().join('-')}</p> {/* date format is yyyy-mm-dd, so reverse it to dd-mm-yyyy */}
                <p>{Math.round(data.main.temp - 273.15)}°c, {data.weather[0].main}</p>
            </div>
        ) : null
    ));

    const foreCastBoxes = weatherData.list.map((data, index) => {
        if (index % 8 === 0 && index > 0) {
            const date = data.dt_txt.split(' ')[0];
            const dayOfWeek = new Date(date).getDay(); //get day of week as a number
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // days of week are 0-6 starting with Sunday
            const currentDay = daysOfWeek[dayOfWeek];
            return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <ForecastBox day={currentDay} temperature={Math.round(data.main.temp - 273.15)} weatherDesc={data.weather[0].description} icon={data.weather[0].icon}/>
                </div>
            );
        } else {
            return null;
        }
    });

    return (
        <>
            {weatherHeading}
            <div className="row">
                {foreCastBoxes}
            </div>

        </>
    );
}

export default WeatherInformation;
