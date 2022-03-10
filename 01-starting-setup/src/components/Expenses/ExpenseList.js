import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  const expenses = [];

  props.list_.forEach((element) => {
    expenses.push(
      <ExpenseItem
        Date={element.date}
        Title={element.title}
        Amount={element.amount}
      />
    );
  });

  return <Card className="expenses">{expenses}</Card>;
};

export default ExpenseList;
