export const sortedCountry = (countriesData, rangeValueupdated) => {
  const countryObj = Object.keys(countriesData).map((i) => {
    return countriesData[i];
  });

  const sortedArrayData = countryObj.sort((a, b) => {
    return b.population - a.population;
  });
  sortedArrayData.length = rangeValueupdated;
  return {
    sortedArrayData
  };
};
