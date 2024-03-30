const ForecastBox = (props) => {

    return (
        <>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.day}</h5>
                        <img className="card-img-top" src={`/assets/weather-icons/${props.icon}.svg`} alt="card image cap"/> 
                        <p className="card-text">{props.temperature}°c</p>
                        <p className="card-text">{props.weatherDesc}</p>
                    </div>
            </div>
        </>
    );
}

export default ForecastBox;