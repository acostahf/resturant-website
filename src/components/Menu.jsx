import React from "react";

export default function Menu(props) {
  return (
    <div>
      <h2>Main dishes </h2>
      <div>
        {props.mains.map(main => (
          <h4 key={main._id}>{main.name}</h4>
        ))}
      </div>
      <h2>Wine List</h2>
      <div>
        {props.wines.map(wine => (
          <h4 key={wine._id}>{wine.name}</h4>
        ))}
      </div>
    </div>
  );
}
