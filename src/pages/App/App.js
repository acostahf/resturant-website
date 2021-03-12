import React, { Component } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import * as mainAPI from "../../services/mains-api";
import * as wineAPI from "../../services/wines-api";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero";
import About from "../../components/About";
// import Menu from "../../components/Menu";
// import Order from "../../components/Order";
import AdminPage from "../AdminPage";
import Contact from "../../components/Contact";
import Entrees from "../../components/Entrees";
import Wines from "../../components/Wines";
import Online from "../../components/Online";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      mains: [],
      wines: [],
      order: [],
    };
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   // const newOrder = this.setState(state => ({
  //   //   order: [...state.order, newOrder]
  //   // }));
  //   console.log("this is ", this);
  // }
  // handleChange(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(e.target.name);
  // }

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
        <Hero />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <About />
                <Online />

                {/* <Menu mains={this.state.mains} wines={this.state.wines} />
                <Order
                  mains={this.state.mains}
                  wines={this.state.wines}
                  componentDidMount={this.componentDidMount}
                  onSubmit={this.onSubmit}
                  handleChange={this.handleChange}
                /> */}
                <Contact />
              </div>
            )}
          />
          <Route
            path="/entrees"
            render={(props) => (
              <div>
                <Entrees mains={this.state.mains} />
                <Contact />
              </div>
            )}
          />
          <Route
            path="/wines"
            render={(props) => (
              <div>
                <Wines wines={this.state.mains} />
                <Contact />
              </div>
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <div>
                <About />
                <Contact />
              </div>
            )}
          />

          <Route
            path="/AdminPage"
            render={(props) => <AdminPage {...props} />}
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
