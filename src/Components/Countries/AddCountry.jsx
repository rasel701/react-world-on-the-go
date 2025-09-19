import React from "react";

const AddCountry = ({ country, handleRemoveName }) => {
  return (
    <div
      onClick={() => handleRemoveName(country.name.common)}
      style={{
        background: "tan",
        padding: "10px",
        width: "150px",
        borderRadius: "10px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <h2>{country.name.common}</h2>
    </div>
  );
};

export default AddCountry;
