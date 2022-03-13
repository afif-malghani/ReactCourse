import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: "Credit Card debt",
    date: new Date(2022, 3, 1),
    amount: 123456,
  },
  {
    id: 1,
    title: "Dummy",
    date: new Date(2022, 3, 1),
    amount: 98765,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    expense = { id: 0, ...expense, amount: parseFloat(expense.amount) };

    console.log("from App:");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses].sort((a, b) =>
        a.date > b.date ? 1 : -1
      );
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList list_={expenses} />
    </div>
  );
}

export default App;
