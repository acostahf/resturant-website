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
        {/* <div>
          {props.wines.map(wine => (
            <h4 key={wine._id}>{wine.name}</h4>
          ))}
        </div> */}
        <div onSubmit={this.handleSubmit}>
          <h2>select a wine</h2>
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
          <h2>select a Main</h2>
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
        <div>
          {this.state.name.map(n => (
            <h4 key={n}>{n}</h4>
          ))}
          {/* {this.state.name} */}
        </div>
      </div>
    );
  }
}

export default Order;