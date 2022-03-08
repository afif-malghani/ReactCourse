import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const expenses = [];

  props.list_.forEach((element) => {
    expenses.push(
      <ExpenseItem
        ExpenseDate={element.date}
        ExpenseDescription={element.title}
        ExpenseAmount={element.amount}
      />
    );
  });

  return <div className="expenses">{expenses}</div>;
};

export default ExpenseList;
