import React from "react";
import { BrowswerRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import MainList from "../../components/MainList";
import AddMain from "../AddMainPage/AddMain";

const HomePage = props => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handlelogout={props.handlelogout} />
      <Route path="/" exact component={MainList} />
      <Route
        path="/create"
        exact
        component={AddMain}
        handleAddMain={props.handleAddMain}
      />
    </div>
  );
};

export default HomePage;
