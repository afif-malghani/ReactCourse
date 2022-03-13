import { useState } from "react";
import "./ExpenseForm.css";
import moment from "moment";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // OR, Alternatively

    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });

    // Benifits of using function inside update function:
    //      react guarentees that we get most recet snapshot of previous state
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmout: event.target.value });

    setUserInput((prevState) => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });

    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };
    console.log("from Expense Form:");
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setUserInput({
      title: "",
      amount: 0,
      date: "",
    });
  };

  let now = new Date();
  let today = moment(now).format("YYYY-MM-DD");
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <input
            type="text"
            placeholder="Title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <input
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max={today}
            value={userInput.date}
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
