import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "a",
      amount: "b",
      date: new Date(2021, 2, 28),
    },
    {
      title: "a",
      amount: "b",
      date: new Date(2021, 2, 28),
    },
    {
      title: "a",
      amount: "b",
      date: new Date(2021, 2, 28),
    },
    {
      title: "a",
      amount: "b",
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <Expenses

    items={expenses}
  ></Expenses>
  );
}

export default App;
