import React from "react";
import Country from "./Country";

function CountrySelect({ countries, onCountrySelect }) {
  function handleChange(evt) {
    const index = evt.target.value;
    const country = countries[index];
    onCountrySelect(country);
  }

  const countryDropDown = countries.map((country, index) => {
    return (
      <option value={index} key={index}>
        {country.name.official}
      </option>
    );
  });

  return (
    <>
      <select defaultValue="" onChange={handleChange}>
        <option value="">Choose a Country</option>
        {countryDropDown}
      </select>
    </>
  );
}

export default CountrySelect;
