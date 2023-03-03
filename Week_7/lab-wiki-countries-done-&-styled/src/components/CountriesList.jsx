import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div className='cList'>
      {countries.map((country) => {
        return (
          <Link to={`/${country.alpha3Code}`}>
          <div className='myCard'>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <p>{country.name.common}</p>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
