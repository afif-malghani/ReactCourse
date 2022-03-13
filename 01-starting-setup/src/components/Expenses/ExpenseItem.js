import "./ExpenseItem.css";
import DateBox from "./DateBox";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <DateBox Date={props.Date}></DateBox>
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">Rs. {props.Amount}</div>
      </div>
    </div>
  );
};

/*
whatever man
* this is important shit
! whatever lool
? What's up man?
TODO: Nothing, lol.
@
*/

export default ExpenseItem;
