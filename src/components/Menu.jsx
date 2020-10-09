import React from "react";
import { Button } from "@material-ui/core";

export default function Menu(props) {
  return (
    <div>
      <div>
        <h3>Food Items</h3>
        <ul>
          {props.mains.map((main) => (
            <li key={main._id}>
              {main.name}
              <Button
                variant="contained"
                color="primary"
                onSubmit={this.handleSubmit}
                onClick={() => this.addToList(this.state.userInput)}
              >
                ADD
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>WINE LIST</h3>
        <ul>
          {props.wines.map((wine) => (
            <li key={wine._id}>
              {wine.name}
              <Button
                variant="contained"
                color="primary"
                onSubmit={this.handleSubmit}
                onClick={() => this.addToList(this.state.userInput)}
              >
                ADD
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
