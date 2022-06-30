import React from "react";

function Country({
  countryName,
  population,
  capital,
  languages,
  flag,
  borders,
  handleBorders,
}) {
  function getCountriesByCode() {
    const borderCountries = borders.map((country) => {
      return handleBorders(country);
    });
    const listCountries = borderCountries.map((country) => {
      return (
        <li>
          Name: {country.name.official} Population {country.population}
        </li>
      );
    });
    return listCountries;
  }
  return (
    <>
      <h2>{countryName}</h2>
      <img src={flag} alt="flag" />
      <p>{population}</p>
      <p>{capital}</p>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <ul>{getCountriesByCode()}</ul>
    </>
  );
}

export default Country;
