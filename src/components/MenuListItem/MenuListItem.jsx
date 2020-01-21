import React from "react";
import { Link } from "react-router-dom";

function MenuListItem({ menu, handleDeleteMenu }) {
  return (
    <div>
      <div className="">
        <h3>{menu.name}</h3>
      </div>
      <div>
        {/* <Link
          className=""
          to={{
            pathname: "/details",
            state: { menu }
          }}
        >
          DETAILS
        </Link> */}
        {/* <Link
          className=""
          to={{
            pathname: "/edit",
            state: { menu }
          }}
        >
          EDIT
        </Link> */}
        {/* <button className="" onClick={() => handleDeleteMenu(menu._id)}>
          DELETE
        </button> */}
      </div>
    </div>
  );
}

export default MenuListItem;
