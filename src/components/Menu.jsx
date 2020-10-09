import React from "react";

export default function Menu(props) {
  return (
    <div>
      <div>
        <h1>Food Items</h1>
        <ul>
          <li>
            {props.mains.map((main) => (
              <h5 key={main._id}>{main.name}</h5>
            ))}
          </li>
        </ul>
      </div>

      <div>
        <h1>WINE LIST</h1>
        <ul>
          <li>
            {props.wines.map((wine) => (
              <h5 key={wine._id}>{wine.name}</h5>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
