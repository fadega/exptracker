import React from "react";

import ExpenseItem from "./components/ExpenseItem";

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
      <p>This is also visible</p>

      {/* <ExpenseItem></ExpenseItem> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
