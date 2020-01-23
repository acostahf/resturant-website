import React from "react";
import { Link } from "react-router-dom";

function WineListItem({ wine, handleDeleteWine }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
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
          class="btn btn-primary"
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
    </div>
  );
}

export default WineListItem;
