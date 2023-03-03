import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => {
        setCountries(
          res.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className="appBody">
        <div className="countryList">
          <CountriesList countries={countries} />
        </div>

        <div className="countryDetails">
          <Routes>
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
