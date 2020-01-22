import React from "react";
import MainListItem from "../components/MainListItem/MainListItem";
import WineListItem from "../components/WineListItem/WineListItem";

function MainListPage(props) {
  return (
    <>
      <h1>Main List</h1>
      <div className="MainListPage-grid">
        {props.mains.map(main => (
          <MainListItem
            main={main}
            handleDeleteMain={props.handleDeleteMain}
            key={main._id}
          />
        ))}
      </div>
      <h1>wine List</h1>
      <div className="MenuListPage-grid">
        {props.wines.map(wine => (
          <WineListItem
            wine={wine}
            handleDeleteWine={props.handleDeleteWine}
            key={wine._id}
          />
        ))}
      </div>
    </>
  );
}

export default MainListPage;
