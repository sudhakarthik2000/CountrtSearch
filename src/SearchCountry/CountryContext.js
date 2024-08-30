// CountryContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [CountryDetails, SetCountryDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      SetCountryDetails(response.data);
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };

  return (
    <CountryContext.Provider value={{ CountryDetails, searchValue, setSearchValue }}>
      {children}
    </CountryContext.Provider>
  );
};
