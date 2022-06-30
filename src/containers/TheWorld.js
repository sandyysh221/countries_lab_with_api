import React, { useState, useEffect } from "react";
import CountrySelect from "../components/CountrySelect";
import FavourtieCountries from "../components/FavouriteCountries";
import CountryInformation from "../components/CountryInformation";
import Country from "../components/Country";

function TheWorld() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favouriteCountry, setFavouriteCountry] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async function () {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    setCountries(countries);
  };

  function createFavourites(country) {
    const copyFavs = [...favouriteCountry];
    copyFavs.push(country);
    setFavouriteCountry(copyFavs);
  }

  function getTotalPopulation(countries) {
    const countryPopulation = countries.map((country) => {
      return country.population;
    });
    const population = countryPopulation.reduce((prev, curr) => {
      return (prev += curr);
    }, 0);
    return population;
  }

  return (
    <>
      <h1>The World</h1>
      <p>World Population: {getTotalPopulation(countries)}</p>
      <CountrySelect
        countries={countries}
        onCountrySelect={setSelectedCountry}
      />
      <CountryInformation
        country={selectedCountry}
        createFavourites={createFavourites}
      />
      <FavourtieCountries countries={favouriteCountry} />
    </>
  );
}

export default TheWorld;
