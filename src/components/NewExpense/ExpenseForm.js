import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
export default function ExpenseForm(props) {
    // Method 1 - One useState change for each update
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    // Method 2: Single useState, multiple stae update
    /*
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });

    const titleChangeHandler = (event) => {
      setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
      });
    };

    const amountChangeHandler = (event) => {
      setUserInput({
        ...userInput,
        enteredAmount:event.target.value,
      });
    };

    const dateChangeHandler = (event)=>{
      setUserInput({
        ...userInput,
        enteredDate:event.target.value,
      });
    };
  */

    // Method 3. to avoid an outdated previous state, pass a function to the useState
    /*
    const titleChangeHandler = (event) => {
      setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value};
      });
    };

    const dateChangeHandler = (event) => {
      setUserInput((prevState) => {
        return {...prevState, enteredDate:event.target.value };
      });
    };

    const amountChangeHandler = (event) => {
      setUserInput((prevState) => {
        return {...prevState, enteredAmount:event.target.value };
      });
    };
    */

     //Method 4. shared change handler function
    // const inputChangeHandler = (identifier, value) => {
    //   if(identifier === 'title'){
    //     setEnteredTitle(value);
    //   }else if(identifier === 'amount'){
    //     setEnteredAmount(value);
    //   }else if(identifier === 'date'){
    //     setEnteredDate(value);
    //   }
    // };
    
    //Submit data on button click - default behaviour of form is to reload the page
    const submitHandler = (event) => {
      event.preventDefault();
      //create object to pass to parent component - or use the method 2 and pass the object
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate + 'T00:00:00'),
      };
     
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler}/>
          {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)}/> */}
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input 
            type="text"
            value={enteredAmount} 
            onChange={amountChangeHandler} 
            min='0.01' 
            step="0.01" 
            />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('amount',event.target.value)} min='0.01' step="0.01"/> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            value={enteredDate}
            onChange={dateChangeHandler} 
            min='2019-01-01' 
            max="2022-12-31" />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('date',event.target.value)} min='2019-01-01' max="2022-12-31" /> */}
        </div>
      </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}
