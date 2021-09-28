import {useState} from "react"
import Weather from "./Weather";

const CountryDisplay = ({ country }) => {
    const [weather, setWeather] = useState([]);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p> Population: {country.population}</p>
        <h2>Languages</h2>
  
        <div>
          {Object.values(country.languages).map((lang) => (
            <p key={lang}>{lang}</p>
          ))}
        </div>
  
        <img src={country.flags.png} alt="" width="150" height="75" />
        <Weather capital={country.capital} setWeather={setWeather} weather={weather} />
      </div>
    );
  };

  export default CountryDisplay