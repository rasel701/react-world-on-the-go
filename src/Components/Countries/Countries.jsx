import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";
import AddCountrys from "./AddCountrys";

const Countries = ({ countriesPromise }) => {
  const countreData = use(countriesPromise);
  const countries = countreData.countries;
  const [visitCount, setVisitCount] = useState([]);
  const [addCountry, setAddCountry] = useState([]);

  const handleVisitCount = (country) => {
    if (!visitCount.includes(country)) {
      setVisitCount([...visitCount, country]);
    }
  };

  const handleAddCountryName = (countrys) => {
    if (!addCountry.includes(countrys)) {
      setAddCountry([...addCountry, countrys]);
    }
  };

  const handleRemoveName = (cName) => {
    const updateList = addCountry.filter((obj) => obj.name.common !== cName);
    console.log(updateList);
    setAddCountry(updateList);
  };

  console.log(addCountry);
  return (
    <>
      <h2>In the countries :{countries.length}</h2>
      <h2>Visited Country:{visitCount.length}</h2>
      <h2>Country Name:</h2>
      <AddCountrys
        handleRemoveName={handleRemoveName}
        addCountry={addCountry}
      ></AddCountrys>
      <div className="conuntries ">
        {countries.map((countrie) => (
          <Country
            handleVisitCount={handleVisitCount}
            handleAddCountryName={handleAddCountryName}
            key={countrie.cca3.cca3}
            countrie={countrie}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
