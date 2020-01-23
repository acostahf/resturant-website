import React, { Component } from "react";
import * as wineAPI from "../services/wines-api";
import * as mainAPI from "../services/mains-api";

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

    this.state = {
      userInput: "",
      name: [],
      wines: [],
      mains: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }
  addToList(input) {
    let listArry = this.state.name;

    listArry.push(input);

    this.setState({
      name: listArry,
      userInput: ""
    });
  }
  handleSubmit = e => {
    e.preventDefalult();
  };

  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
    const wines = await wineAPI.getAll();
    this.setState({ wines });
  }

  render(props) {
    return (
      <div>
        <div onSubmit={this.handleSubmit}>
          <h2>SELECT A WINE</h2>
          <select
            value={this.state.userInput}
            onChange={e => this.changeUserInput(e.target.value)}
          >
            <option value="choose a wine ">choose a wine</option>

            {this.state.wines.map(function(wine) {
              return (
                <option key={wine.name} value={wine.name}>
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
        <div onSubmit={this.handleSubmit}>
          <h2>SELECT A MAIN</h2>
          <select
            value={this.state.userInput}
            onChange={e => this.changeUserInput(e.target.value)}
          >
            <option value="choose a main ">choose a main</option>

            {this.state.mains.map(function(main) {
              return (
                <option key={main.name} value={main.name}>
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
        </div>
        <div class="container-sm">
          <ul className="list-group">
            {this.state.name.map(n => (
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

export default Order;
