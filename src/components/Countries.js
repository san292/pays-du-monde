import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchData } from '../api/fetchApi';
import { sortedCountry } from '../utils/sortCoountries';

const Countries = () => {
  const [state, setState] = useState({
    data: [],
    playOnce: true,
    rangeValue: 40
  });

  const { data, playOnce, rangeValue } = state;

  const sortedArrayData = sortedCountry(data, rangeValue);

  useEffect(() => {
    if (playOnce) {
      fetchData().then((res) =>
        setState({
          ...state,
          data: res,
          playOnce: false
        })
      );
    }
  }, [data, playOnce, rangeValue, sortedArrayData, state]);

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="100"
          value={state.rangeValue}
          onChange={(e) => setState({ ...state, rangeValue: e.target.value })}
        />
      </div>
      <ul className="countries-list">
        {sortedArrayData.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
