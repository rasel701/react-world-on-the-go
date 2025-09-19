import React, { useState } from "react";
import "./Country.css";

const Country = ({ countrie, handleVisitCount, handleAddCountryName }) => {
  const [visited, setVisited] = useState(false);
  const handleBtnClick = (countryName) => {
    // setVisited(!visited);
    setVisited(!visited);
    visited ? "" : handleVisitCount(countryName);
  };
  let x = "visited-country";
  return (
    <div className={`country ${visited && x}`}>
      <img src={countrie?.flags?.flags?.png} alt={countrie.flags.flags.alt} />
      <h3>Name:{countrie.name.common}</h3>
      <h4>Population:{countrie.population.population}</h4>
      <p>
        Area:{countrie.area.area}{" "}
        <span
          style={{
            background: "green",
            padding: "5px",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {" "}
          {countrie.area.area > 30000 ? "Big Country" : "Small Country"}
        </span>
      </p>
      <button
        className="visitedBtn"
        onClick={() => handleBtnClick(countrie.name.common)}
      >
        {visited ? "Visited" : "Not visited"}
      </button>
      <button
        onClick={() => handleAddCountryName(countrie)}
        className="addtoList"
      >
        Add To List
      </button>
    </div>
  );
};

export default Country;
