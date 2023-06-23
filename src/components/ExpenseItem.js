import React from "react";
import "./ExpenseItem.css";
import ReactDOM from "react-dom/client";

function ExpenseItem(props) {

   const formattedDate = props.date.toLocaleDateString('en-US', {
        day: '2-digit', 
        month: 'long', 
        year: 'numeric'
      });
    
  return (
    <div className="expense-item">
    {/* <div>{expenseDate.toISOString()}</div> */}
    {/* <div>{props.date.toISOString()}</div> */}
    <div>{formattedDate}</div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
    </div>
</div>
  );
}

export default ExpenseItem;


