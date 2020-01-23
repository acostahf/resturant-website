import React from "react";

export default function Menu(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2">
      <div className="card">
        <h5 className="card-header">MAIN DISHES</h5>
        <div className="card-body">
          {props.mains.map(main => (
            <h5 className="card-title" key={main._id}>
              {main.name}
            </h5>
          ))}
          {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      <div className="card">
        <h5 className="card-header">WINE LIST</h5>
        <div className="card-body">
          {props.wines.map(wine => (
            <h5 className="card-title" key={wine._id}>
              {wine.name}
            </h5>
          ))}
          {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}
