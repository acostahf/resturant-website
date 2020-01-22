import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as mainAPI from "../../services/mains-api";
import * as wineAPI from "../../services/wines-api";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About";
import Menu from "../../components/Menu";
import AdminPage from "../AdminPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      mains: [],
      wines: []
    };
  }

  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
    const wines = await wineAPI.getAll();
    this.setState({ wines });
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
              <div>
                <About />
                <Menu mains={this.state.mains} wines={this.state.wines} />
              </div>
            )}
          />
          <Route path="/AdminPage" render={props => <AdminPage {...props} />} />
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
