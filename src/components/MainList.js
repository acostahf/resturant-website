import React, { Component } from "react";
import * as mainAPI from "../services/mains-api";

export default class MainList extends Component {
  constructor(props) {
    super(props);

    this.state = { mains: [] };
  }

  async componentDidMount() {
    const mains = await mainAPI.getAll();
    this.setState({ mains });
  }

  render() {
    const mainRows = this.state.mains.map(main => (
      <tr>
        <td>{main.name}</td>
        <td>{main.price}</td>
        <td>{main.description}</td>
      </tr>
    ));
    return (
      <div>
        <h3>Main Menu</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{mainRows}</tbody>
        </table>
      </div>
    );
  }
}
