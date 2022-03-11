import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({ ...userInput, enteredTitle: event.target.value });
  };

  const amountChandeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({ ...userInput, enteredAmout: event.target.value });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  let today = new Date();
  today = today.toLocaleDateString();
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChandeHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01/01/2023"
            max={today}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
