import "./ExpenseItem.css";
import DateBox from "./DateBox";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <DateBox Date={props.ExpenseDate}></DateBox>
      <div className="expense-item__description">
        <h2>{props.ExpenseDescription}</h2>
        <div className="expense-item__price">Rs. {props.ExpenseAmount}</div>
      </div>
    </div>
  );
};

/*
whatever man
* this is important shit
! whatever lool
? What's up man?
TODO: Nothing, lol.
@
*/

export default ExpenseItem;
