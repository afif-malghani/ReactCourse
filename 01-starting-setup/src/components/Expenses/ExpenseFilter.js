import "./ExpenseFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterApply(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={filterChangeHandler}>
          <option value="All">All</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
