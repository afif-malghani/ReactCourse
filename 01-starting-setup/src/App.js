import Card from "./components/UI/Card";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList list_={expenses} />
    </div>
  );
}

export default App;
