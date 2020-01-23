import React from "react";
import { Link } from "react-router-dom";

function MainListItem({ main, handleDeleteMain }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{main.name}</h5>
        <p className="card-text">Price: ${main.price}</p>
        <p className="card-text">
          Description:
          {main.description}
        </p>
        <Link
          to={{
            pathname: "/AdminPage/edit",
            state: { main }
          }}
          class="btn btn-primary"
        >
          EDIT
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteMain(main._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MainListItem;
