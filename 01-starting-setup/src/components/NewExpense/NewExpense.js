import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formView, setFromView] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    const expenseData = enteredExpenseData;
    console.log("from New Expense:");
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const makeVisible = () => {
    setFromView(true);
  };

  const makeInvisible = () => {
    setFromView(false);
  };
  return (
    <div className="new-expense">
      {!formView && <button onClick={makeVisible}>Add Expense</button>}
      {formView && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={makeInvisible}
        />
      )}
    </div>
  );
};

export default NewExpense;
