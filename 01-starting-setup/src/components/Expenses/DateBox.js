import "./DateBox.css";

const DateBox = (props) => {
  const date = props.Date.toLocaleString("en-us", { day: "numeric" });
  const month = props.Date.toLocaleString("en-us", { month: "long" });
  const year = props.Date.toLocaleString("en-us", { year: "numeric" });
  return (
    <div className="date-box">
      <div className="date_box__day">{date}</div>
      <div className="date_box__month">{month}</div>
      <div className="date_box__day">{year}</div>
    </div>
  );
};

export default DateBox;
