import React, { Component } from "react";
import * as wineAPI from "../services/wines-api";
import * as mainAPI from "../services/mains-api";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  List,
  Typography,
  ListItem,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#246369",
  },
  container: {
    height: 200,
  },
});

class Order extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      name: [],
      wines: [],
      mains: [],
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input,
    });
  }
  addToList(input) {
    let listArry = this.state.name;
    listArry.push(input);
    // this.setState({
    //   name: listArry,
    //   userInput: "",
    // });
  }
  handleSubmit = (e) => {
    e.preventDefalult();
  };
  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
    const wines = await wineAPI.getAll();
    this.setState({ wines });
  }

  render(props) {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container>
          <Typography>Create your order before arriving.</Typography>
          <Typography>
            An easy and fast way to order, Just show your server the order.
          </Typography>
        </Container>
        <div>
          <h1>Create your order now.</h1>
          <div onSubmit={this.handleSubmit}>
            <h2>SELECT A WINE</h2>
            <select
              value={this.state.userInput}
              onChange={(e) => this.changeUserInput(e.target.value)}
            >
              <option value="choose a wine ">choose a wine</option>
              {this.state.wines.map(function (wine) {
                return (
                  <option key={wine.id} value={wine.name}>
                    {wine.name}
                  </option>
                );
              })}
            </select>

            <button
              onSubmit={this.handleSubmit}
              onClick={() => this.addToList(this.state.userInput)}
            >
              Submit
            </button>
          </div>

          {/* <div onSubmit={this.handleSubmit}>
            <h2>SELECT A MAIN</h2>
            <select
              value={this.state.userInput}
              onChange={(e) => this.changeUserInput(e.target.value)}
            >
              <option value="choose a main ">choose a main</option>
              {this.state.mains.map(function (main) {
                return (
                  <option key={main.id} value={main.name}>
                    {main.name}
                  </option>
                );
              })}
            </select>

            <button
              onSubmit={this.handleSubmit}
              onClick={() => this.addToList(this.state.userInput)}
            >
              Submit
            </button>
          </div> */}
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.userInput}
              onChange={this.addToList(this.state.userInput)}
            >
              {this.state.mains.map(function (main) {
                return (
                  <MenuItem key={main.name} value={main.name}>
                    {main.name}
                  </MenuItem>
                );
              })}
              {/* <MenuItem value={10}>Ten</MenuItem> */}
            </Select>
          </FormControl>
          <List>
            {this.state.name.map((n) => (
              <ListItem key={n}>{n}</ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Order);
