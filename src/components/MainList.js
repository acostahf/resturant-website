import React from "react";
import MainListItem from "../components/MainListItem/MainListItem";
import MenuListItem from "../components/MenuListItem/MenuListItem";

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
      <h1>menu List</h1>
      <div className="MenuListPage-grid">
        {props.menus.map(menu => (
          <MenuListItem menu={menu} key={menu._id} />
        ))}
      </div>
    </>
  );
}

export default MainListPage;
