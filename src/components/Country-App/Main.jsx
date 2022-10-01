import React, { useState, useEffect } from "react";

import style from "./country-component-css/main.module.css";

import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v2/all";

const Main = () => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsloading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsloading(false);
      setError(null);
    } catch (error) {
      setIsloading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => country.name !== name);
    return setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.startsWith(value);
    });

    setFilteredCountries(newCountries);
  };
  return (
    <>
      <h1> Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
      {error && <h2> {error.message} </h2>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
};

export default Main;
