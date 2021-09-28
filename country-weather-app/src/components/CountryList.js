import CountryDisplay from "./CountryDisplay.js";

const CountryList = ({ countries, filterTerm, setFilterTerm }) => {
  const showCountry = (country) => {
    setFilterTerm(country.name.common);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterTerm.toLowerCase())
  );

  if (countriesToShow.length > 10) {
    return <div>Please make search query more specific</div>;
  } else if ((countriesToShow.length > 2 && countriesToShow.length < 10) || countriesToShow.length === 0) {
    return countriesToShow.map((country, i) => (
      <div key={country.name.common}>
        {country.name.common}
        <button key={i} onClick={() => showCountry(country)}>
          Show
        </button>
      </div>
    ));
  } else return <CountryDisplay country={countriesToShow[0]} />;
};

export default CountryList;
