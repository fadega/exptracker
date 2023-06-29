import React,{useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// import data from "./components/data";


const INITIAL_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 100.67,
    date: new Date(2019, 2, 21),
  },
  {
    id: "2",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 1, 11),
  },
  {
    id: "3",
    title: "New TV",
    amount: 294.67,
    date: new Date(2020, 7, 8),
  },
  {
    id: "4",
    title: "Book One",
    amount: 13.67,
    date: new Date(2020, 5, 25),
  },
  {
    id: "5",
    title: "Bed Sheets",
    amount: 78.15,
    date: new Date(2021, 1,11),
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //adding new expense to the list
    });
    //setExpenses([expense, ...expenses]); //adding new expense to the list

  };

  return (
    <div className="App">
      
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses}></Expenses>
   

    </div>
  );
}

export default App;
