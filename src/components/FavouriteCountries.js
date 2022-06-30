import React from "react";

function FavourtieCountries({ countries }) {
  return (
    <>
      <h2>Favourite Countries Are:</h2>
      <ul>
        {countries.map((country) => (
          <li>{country.name.official}</li>
        ))}
      </ul>
    </>
  );
}

export default FavourtieCountries;
