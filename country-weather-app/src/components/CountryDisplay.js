import { useState } from "react";
import Weather from "./Weather";

const CountryDisplay = ({ country }) => {
  console.dir(country);
  const [weather, setWeather] = useState([]);

  return (
    <div>
      <h1>{country.name}</h1>

      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p> Region: {country.region}</p>
      <p> Sub-Region: {country.subregion}</p>
      <h2>Languages</h2>

      <div>
        {country.languages.map((lang) => (
          <p key={lang.name}>{lang.name}</p>
        ))}
      </div>

      <img src={country.flag} alt="" width="150" height="75" />
      <Weather capital={country.capital} setWeather={setWeather} weather={weather} />
    </div>
  );
};

export default CountryDisplay;
