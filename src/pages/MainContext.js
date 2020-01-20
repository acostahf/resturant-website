import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = props => {
  const [mains, setMains] = useState([
    {
      name: "Spag",
      price: "$14",
      description: "Pretty good",
      id: 1
    },
    {
      name: "Pizaa",
      price: "$17",
      description: "Pretty good",
      id: 2
    },
    {
      name: "Salad",
      price: "$9",
      description: "Pretty good",
      id: 3
    }
  ]);
  return (
    <MainContext.Provider value={[mains, setMains]}>
      {props.children}
    </MainContext.Provider>
  );
};
