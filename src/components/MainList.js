import React from "react";
import MainListItem from "../components/MainListItem/MainListItem";
import WineListItem from "../components/WineListItem/WineListItem";

function MainListPage(props) {
  return (
    <>
      <h1>MAIN LIST</h1>

      <div>
        {/* <div className="card-group"> */}
        {props.mains.map(main => (
          <div className="card mx-auto">
            <div className="card-body">
              <MainListItem
                main={main}
                handleDeleteMain={props.handleDeleteMain}
                key={main._id}
              />
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}

      <h1>WINE LIST</h1>
      <div className="">
        {props.wines.map(wine => (
          <div className="card mx-auto">
            <div className="card-body">
              <WineListItem
                wine={wine}
                handleDeleteWine={props.handleDeleteWine}
                key={wine._id}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainListPage;
