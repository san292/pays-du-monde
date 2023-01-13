export const sortedCountry = (countriesData, rangeValueupdated) => {
  const countryObj = Object.keys(countriesData)
    .map((i) => {
      return countriesData[i];
    })
    .sort((a, b) => {
      return b.population - a.population;
    });
  countryObj.length = rangeValueupdated;
  return countryObj;
};
