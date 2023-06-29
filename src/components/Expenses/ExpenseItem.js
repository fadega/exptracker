import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// WAY 1. Props as arguments - one object of key value pairs
function ExpenseItem(props) {

  // change state of title
  const [title, setTitle] = useState(props.title);

  function changeTitleHandler() {
    setTitle("Updated!");
  }

  // retain old state to toggle between two states
  // const [title, setTitle] = useState(props.title);
  // const alternateTitle = "Updated!";
  
  // function changeTitleHandler() {
  //   setTitle(title === props.title ? alternateTitle : props.title);
  // }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      {/* <button onClick={()=>setTitle("Updated Title")}>Change Title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
