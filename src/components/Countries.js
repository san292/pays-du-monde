import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchData } from '../helpers/fetchApi';
import { sortedCountry } from '../utils/sortCoountries';

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);

  useEffect(() => {
    if (playOnce) {
      fetchData().then((res) => {
        setData(res);
        setPlayOnce(false);
      });
    }
    const { sortedArrayData } = sortedCountry(data, rangeValue);
    console.log(sortedArrayData);

    setSortedData(sortedArrayData);
    // const sortedCountry = () => {
    //   const countryObj = Object.keys(data).map((i) => {
    //     return data[i];
    //   });

    //   const sortedArray = countryObj.sort((a, b) => {
    //     return b.population - a.population;
    //   });
    //   sortedArray.length = rangeValue;
    // sortedCountry();
  }, [data, rangeValue, playOnce]);

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="100"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </div>
      <ul className="countries-list">
        {sortedData.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
