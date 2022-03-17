import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";

const ExpenseList = (props) => {
  const [filterValue, setFilterValue] = useState("All");

  const addFilterHandler = (selYear) => {
    setFilterValue(selYear);
  };

  const filteredExpenseList = props.list_.filter(
    (item) => filterValue === "All" || item.date.getMonth() == filterValue
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterApply={addFilterHandler}
        selectedYear={filterValue}
      />

      <ExpensesChart expenses={filteredExpenseList} />
      {filteredExpenseList.length === 0 && (
        <p className="text-white">No Expenses Found</p>
      )}
      {filteredExpenseList.length > 0 &&
        filteredExpenseList.map((expense, index) => (
          <ExpenseItem
            key={index}
            Date={expense.date}
            Title={expense.title}
            Amount={expense.amount}
          />
        ))}
    </Card>
  );
};

export default ExpenseList;
