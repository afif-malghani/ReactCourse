import { useState } from "react";
import "./ExpenseForm.css";
import moment from "moment";

const ExpenseForm = (props) => {
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

    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // OR, Alternatively
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    // Benifits of using function inside update function:
    //      react guarentees that we get most recet snapshot of previous state
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmout: event.target.value });

    setUserInput((prevState) => {
      return { ...prevState, enteredAmout: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      enteredDate: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmout: "",
      enteredDate: "",
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
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <input
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmout}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max={today}
            value={userInput.enteredDate}
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
