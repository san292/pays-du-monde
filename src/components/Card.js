import React from 'react';

const Card = ({ country }) => {
  const { capital, flag, name, region } = country;

  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="card">
      <img src={flag} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{name}</li>
          <li>Capital : {capital}</li>
          <li>population : {numberFormat(country.population)}</li>

          <li>Region: {region}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
