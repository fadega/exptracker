import React from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
// import data from "./components/data";


function App() {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 100.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "2",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "3",
      title: "New TV",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "New Desk (Wooden)",
      amount: 315.67,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div className="App">
      <h1>React App</h1>

      <Expenses items={expenses}></Expenses>
   

    </div>
  );
}

export default App;
