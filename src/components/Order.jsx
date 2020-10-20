import React, { Component } from "react";
import * as wineAPI from "../services/wines-api";
import * as mainAPI from "../services/mains-api";
import Menu from "../components/Menu";

import { Button, Grid, Checkbox } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: "none",
//   },
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });
const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    minHeight: 350,
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// function Order(props) {
//   return (
//     <>
//       <h1>Your Order</h1>
//       <form onSubmit={props.onSubmit} onChange={props.handleChange}>
//         <select>
//           {props.wines.map(function(wine) {
//             return (
//               <option key={wine.name} value={wine.name}>
//                 {wine.name}
//               </option>
//             );
//           })}
//         </select>
//         <div>
//           <input type="submit" />
//         </div>
//       </form>
//       <ul>
//         <li>order list</li>
//       </ul>
//     </>
//   );
// }

class Order extends Component {
  constructor() {
    super();
    // this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      userInput: "",
      name: [],
      wines: [],
      mains: [],
      checkedValues: [],
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

    this.setState({
      name: listArry,
      userInput: "",
    });
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
      <div className="">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <div>
                  <div onSubmit={this.handleSubmit}>
                    <h3>Wine List</h3>
                    <ul>
                      {this.state.wines.map(function (wine) {
                        return (
                          <li key={wine.name} value={wine.name}>
                            {wine.name}
                            <Button
                              variant="contained"
                              color="primary"
                              onSubmit={this.handleSubmit}
                              onClick={() =>
                                this.addToList(this.state.userInput)
                              }
                            >
                              ADD
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div onSubmit={this.handleSubmit}>
                    {/* <Checkbox
                      // checked={checked}
                      value={this.state.userInput}
                      onChange={(e) => this.changeUserInput(e.target.value)}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    > */}
                    <h3>Food Items</h3>
                    <ul>
                      {this.state.mains.map(function (main) {
                        return (
                          <li key={main.name} value={main.name}>
                            {main.name}
                            <Button
                              variant="contained"
                              color="primary"
                              onSubmit={this.handleSubmit}
                              onClick={() =>
                                this.addToList(this.state.userInput)
                              }
                            >
                              ADD
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                    {/* </Checkbox> */}
                  </div>
                </div>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <div>
                  <h3>Your Order</h3>
                  <ul>
                    {this.state.name.map((n) => (
                      <li className="list-group-item" key={n}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>

        <h1>Create your order now.</h1>
        <div onSubmit={this.handleSubmit}>
          <h2>SELECT A WINE</h2>
          <select
            className="form-control"
            value={this.state.userInput}
            onChange={(e) => this.changeUserInput(e.target.value)}
          >
            <option value="choose a wine ">choose a wine</option>

            {this.state.wines.map(function (wine) {
              return (
                <option key={wine.name} value={wine.name}>
                  {wine.name}
                </option>
              );
            })}
          </select>
          <Button
            variant="contained"
            color="primary"
            onSubmit={this.handleSubmit}
            onClick={() => this.addToList(this.state.userInput)}
          >
            ADD
          </Button>

          {/* <button
            className="btn btn-success"
            onSubmit={this.handleSubmit}
            onClick={() => this.addToList(this.state.userInput)}
          >
            Submit
          </button> */}
        </div>
        <div onSubmit={this.handleSubmit}>
          <h2>SELECT A MAIN</h2>
          <select
            className="form-control"
            value={this.state.userInput}
            onChange={(e) => this.changeUserInput(e.target.value)}
          >
            <option value="choose a main ">choose a main</option>

            {this.state.mains.map(function (main) {
              return (
                <option key={main.name} value={main.name}>
                  {main.name}
                </option>
              );
            })}
          </select>

          <button
            className="btn btn-success"
            onSubmit={this.handleSubmit}
            onClick={() => this.addToList(this.state.userInput)}
          >
            Submit
          </button>
        </div>
        <div class="container-sm">
          <ul className="list-group">
            {this.state.name.map((n) => (
              <li className="list-group-item" key={n}>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Order);
