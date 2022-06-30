import React from "react";
import Country from "./Country";

function CountryInformation({ country, createFavourites }) {
  function handleClick() {
    createFavourites(country);
  }

  if (country === null) {
    return null;
  }
  return (
    <>
      <Country
        countryName={country.name.official}
        population={country.population}
        capital={country.capital[0]}
        languages={Object.values(country.languages)}
      />
      <button onClick={handleClick}>
        Add {country.name.official} to your favourites!
      </button>
    </>
  );
}

export default CountryInformation;
