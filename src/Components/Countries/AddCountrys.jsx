import React from "react";
import "./Countries.css";
import AddCountry from "./AddCountry";

const AddCountrys = ({ addCountry, handleRemoveName }) => {
  return (
    <div className="countryList">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {addCountry.map((country) => (
          <AddCountry
            handleRemoveName={handleRemoveName}
            key={country.name.common}
            country={country}
          ></AddCountry>
        ))}
      </div>
    </div>
  );
};

export default AddCountrys;
