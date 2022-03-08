import Card from "./components/Card";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 0,
      title: "Credit Card debt",
      date: new Date(2022, 3, 1),
      amount: 3699,
    },
    {
      id: 1,
      title: "Fam debt",
      date: new Date(2022, 3, 1),
      amount: 50000,
    },
    {
      id: 2,
      title: "Appartment debt",
      date: new Date(2022, 3, 1),
      amount: 1360,
    },
    {
      id: 3,
      title: "Dinner",
      date: new Date(2022, 3, 1),
      amount: 370,
    },

    {
      id: 4,
      title: "Airlift",
      date: new Date(2022, 3, 2),
      amount: 498,
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
