import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      
       setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <Filter countries={countries} filterTerm={filterTerm} setFilterTerm={setFilterTerm} />

      <CountryList countries={countries} filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
    </div>
  );
}

export default App;
