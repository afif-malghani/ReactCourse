import Card from "./components/UI/Card";
import ExpenseList from "./components/Expenses/ExpenseList";

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
  return (
    <div>
      <ExpenseList list_={expenses} />
    </div>
  );
}

export default App;
