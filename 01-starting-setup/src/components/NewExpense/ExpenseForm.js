import "./ExpenseForm.css";

const ExpenseForm = () => {
  let today = new Date();
  today = today.toLocaleDateString();
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input type="date" min="01/01/2023" max={today} />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
