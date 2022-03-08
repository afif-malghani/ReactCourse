import Card from "./components/Card";
import ExpenseList from "./components/ExpenseList";

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
      <Card>Haha</Card>
      <ExpenseList list_={expenses} />
    </div>
  );
}

export default App;
