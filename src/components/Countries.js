import React, { useEffect, useState } from "react";
import axios from "axios";
const Countries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <div className=".Countries">
      <ul className=".Countries-list">
        {data.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

/*const sayGoodby = ()=>{
    setData('GoodBye');
}

    return (
        <div>
        {data}
        <button onClick= {sayGoodby}> dire au revoir</button>
        
        </div>
    );
};*/
