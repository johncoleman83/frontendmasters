import React from "react";
import { Link } from "@reach/router";

const Pet = ({ name, animal, breed }) => {
  let hero = "http://placecorgi.com/300/300";


  return (
    <Link to={`/details/fixme`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — fixme`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
