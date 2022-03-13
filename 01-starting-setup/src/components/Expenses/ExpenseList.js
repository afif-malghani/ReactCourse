import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

import { useState } from "react";

const ExpenseList = (props) => {
  const [filterValue, setFilterValue] = useState("2019");
  const addFilterHandler = (selYear) => {
    setFilterValue(selYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterApply={addFilterHandler}
        selectedYear={filterValue}
      />
      {props.list_.map((expense) => (
        <ExpenseItem
          Date={expense.date}
          Title={expense.title}
          Amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
