import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainList from "../../components/MainList";
import EditMainPage from "../EditMainPage/EditMainPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as mainAPI from "../../services/mains-api";
import AddMainPage from "../AddMainPage/AddMain";
import NavBar from "../../components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      mains: []
    };
  }

  handleAddMain = async newMainData => {
    const newMain = await mainAPI.create(newMainData);
    this.setState(
      state => ({
        mains: [...state.mains, newMain]
      }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/")
    );
  };

  handleUpdateMain = async updatedMainData => {
    const updatedMain = await mainAPI.update(updatedMainData);
    const newMainsArray = this.state.mains.map(p =>
      p._id === updatedMain._id ? updatedMain : p
    );
    this.setState({ mains: newMainsArray }, () => this.props.history.push("/"));
  };

  handleDeleteMain = async id => {
    await mainAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        mains: state.mains.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/")
    );
  };

  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
  }
  handlelogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handlelogout={this.handlelogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainList
                mains={this.state.mains}
                handleDeleteMain={this.handleDeleteMain}
              />
            )}
          />

          <Route
            path="/create"
            render={() => <AddMainPage handleAddMain={this.handleAddMain} />}
          />
          <Route
            exact
            path="/edit"
            render={({ location }) => (
              <EditMainPage
                handleUpdateMain={this.handleUpdateMain}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
