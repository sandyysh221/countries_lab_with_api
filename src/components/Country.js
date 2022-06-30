import React from "react";

function Country({ countryName, population, capital, languages }) {
  return (
    <>
      <h2>{countryName}</h2>
      <p>{population}</p>
      <p>{capital}</p>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </>
  );
}

export default Country;
