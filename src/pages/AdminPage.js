import React, { Component } from "react";
import "./App/App.css";
import { Route, Switch } from "react-router-dom";
import MainList from "../components/MainList";
import EditMainPage from "./EditMainPage/EditMainPage";
import EditWinePage from "./EditWinePage/EditWinePage";
import userService from "../utils/userService";
import * as mainAPI from "../services/mains-api";
import * as wineAPI from "../services/wines-api";
import AddMainPage from "./AddMainPage/AddMain";
import AddWinePage from "./AddWinePage/AddWine";

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      mains: [],
      wines: []
    };
  }

  handleAddMain = async newMainData => {
    const newMain = await mainAPI.create(newMainData);
    this.setState(
      state => ({
        mains: [...state.mains, newMain]
      }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/AdminPage")
    );
  };

  handleUpdateMain = async updatedMainData => {
    const updatedMain = await mainAPI.update(updatedMainData);
    const newMainsArray = this.state.mains.map(p =>
      p._id === updatedMain._id ? updatedMain : p
    );
    this.setState({ mains: newMainsArray }, () =>
      this.props.history.push("/AdminPage")
    );
  };

  handleDeleteMain = async id => {
    await mainAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        mains: state.mains.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/AdminPage")
    );
  };
  handleAddWine = async newWineData => {
    const newWine = await wineAPI.create(newWineData);
    this.setState(
      state => ({
        wines: [...state.wines, newWine]
      }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/AdminPage")
    );
  };

  handleUpdateWine = async updatedWineData => {
    const updatedWine = await wineAPI.update(updatedWineData);
    const newWinesArray = this.state.wines.map(p =>
      p._id === updatedWine._id ? updatedWine : p
    );
    this.setState({ wines: newWinesArray }, () =>
      this.props.history.push("/AdminPage")
    );
  };

  handleDeleteWine = async id => {
    await wineAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        wines: state.wines.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/AdminPage")
    );
  };

  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
    const wines = await wineAPI.getAll();
    this.setState({ wines });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/AdminPage"
            render={() => (
              <MainList
                mains={this.state.mains}
                wines={this.state.wines}
                handleDeleteMain={this.handleDeleteMain}
                handleDeleteWine={this.handleDeleteWine}
              />
            )}
          />

          <Route
            path="/AdminPage/main/create"
            render={() => <AddMainPage handleAddMain={this.handleAddMain} />}
          />
          <Route
            path="/AdminPage/wine/create"
            render={() => <AddWinePage handleAddWine={this.handleAddWine} />}
          />
          <Route
            exact
            path="/AdminPage/edit"
            render={({ location }) => (
              <EditMainPage
                handleUpdateMain={this.handleUpdateMain}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/AdminPage/wine/edit"
            render={({ location }) => (
              <EditWinePage
                handleUpdateWine={this.handleUpdateWine}
                location={location}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default AdminPage;
