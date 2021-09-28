import { useEffect } from "react";
import axios from "axios";

const Weather = ({ capital, setWeather, weather }) => {
  useEffect(() => {
    console.log("in effect");
    const options = {
      params: {
        q: capital[0],
        units: "metric",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    axios
      .get("https://community-open-weather-map.p.rapidapi.com/weather", options)
      .then((response) => {
        setWeather([response.data]);
        console.log("in axios");
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (weather.length > 0) {
    console.dir(weather);
    return (
      <div>
        <h1>Current Weather in {capital}</h1>
        <p>Sky: {weather[0].weather[0].description}</p>
        <p>Tempterature: {weather[0].main.temp} Degrees C</p>
        <p>Humidity: {weather[0].main.humidity}</p>
      </div>
    );
  } else return <div>No Weather Found</div>;
};

export default Weather;
