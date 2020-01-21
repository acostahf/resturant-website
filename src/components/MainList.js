import React from "react";
import MainListItem from "../components/MainListItem/MainListItem";

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
    </>
  );
}

export default MainListPage;
