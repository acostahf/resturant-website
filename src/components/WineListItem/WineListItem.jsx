import React from "react";
import { Link } from "react-router-dom";

function WineListItem({ wine, handleDeleteWine }) {
  return (
    <div>
      <div className="">
        <h3>{wine.name}</h3>
        <h4>{wine.price}</h4>
        <h4>{wine.grape}</h4>
        <h4>{wine.region}</h4>
        <p>{wine.description}</p>
      </div>
      <div>
        {/* <Link
            className=""
            to={{
              pathname: "/details",
              state: { main }
            }}
          >
            DETAILS
          </Link> */}
        <Link
          className=""
          to={{
            pathname: "/AdminPage/wine/edit",
            state: { wine }
          }}
        >
          EDIT
        </Link>
        <button className="" onClick={() => handleDeleteWine(wine._id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default WineListItem;
