import React from "react";
import MainListItem from "../components/MainListItem/MainListItem";
import WineListItem from "../components/WineListItem/WineListItem";

function MainListPage(props) {
  return (
    <>
      <h1>MAIN LIST</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="">
            {props.mains.map(main => (
              <MainListItem
                main={main}
                handleDeleteMain={props.handleDeleteMain}
                key={main._id}
              />
            ))}
          </div>
        </div>
      </div>

      <h1>WINE LIST</h1>
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
