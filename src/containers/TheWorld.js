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

  function getCountriesByCode(code) {
    const country = countries.find((country) => {
      return country.cca3 === code;
    });
    console.log(country);
    return country;
  }

  function createFavourites(country) {
    const copyFavs = [...favouriteCountry];
    copyFavs.push(country);
    const filteredCountries = copyFavs.filter((country, index, array) => {
      return array.indexOf(country) === index;
    });
    setFavouriteCountry(filteredCountries);
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
        getCountriesByCode={getCountriesByCode}
      />
      <FavourtieCountries countries={favouriteCountry} />
    </>
  );
}

export default TheWorld;
