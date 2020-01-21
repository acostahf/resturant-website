import React from "react";
import { Link } from "react-router-dom";

function MainListItem({ main, handleDeleteMain }) {
  return (
    <div>
      <div className="">
        <h3>{main.name}</h3>
        <h4>{main.price}</h4>
        <p>{main.description}</p>
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
            pathname: "/edit",
            state: { main }
          }}
        >
          EDIT
        </Link>
        <button className="" onClick={() => handleDeleteMain(main._id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MainListItem;
