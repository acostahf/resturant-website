import React from "react";
import { Link } from "react-router-dom";

function WineListItem({ wine, handleDeleteWine }) {
  return (
    <div>
      <h5 className="card-title">{wine.name}</h5>

      <p className="card-text">
        This is a {wine.grape} from {wine.region}. Cost per glass is $
        {wine.price}
      </p>
      <p className="card-text">Description: {wine.description}</p>
      <Link
        to={{
          pathname: "/AdminPage/wine/edit",
          state: { wine }
        }}
        className="btn btn-primary"
      >
        EDIT
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteWine(wine._id)}
      >
        DELETE
      </button>
    </div>
  );
}

export default WineListItem;
