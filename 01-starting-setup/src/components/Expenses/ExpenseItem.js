import "./ExpenseItem.css";
import DateBox from "./DateBox";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.Title);
  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <div className="expense-item">
      <DateBox Date={props.Date}></DateBox>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs. {props.Amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
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
