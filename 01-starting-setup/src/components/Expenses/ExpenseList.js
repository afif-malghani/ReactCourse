import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

import { useState } from "react";

const ExpenseList = (props) => {
  const [filterValue, setFilterValue] = useState("All");
  const addFilterHandler = (selYear) => {
    setFilterValue(selYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterApply={addFilterHandler}
        selectedYear={filterValue}
      />
      {props.list_.filter(
        (item) => filterValue === "All" || item.date.getMonth() == filterValue
      ).length === 0 ? (
        <p className="text-white">No Expenses Found</p>
      ) : (
        props.list_
          .filter(
            (item) =>
              filterValue === "All" || item.date.getMonth() == filterValue
          )
          .map((expense, index) => (
            <ExpenseItem
              key={index}
              Date={expense.date}
              Title={expense.title}
              Amount={expense.amount}
            />
          ))
      )}
    </Card>
  );
};

export default ExpenseList;
