import "./ExpenseDate.css";

function DateItem(props) {
  return (
    <div className="date-container">
      <div className="month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="year">{props.date.getFullYear()}</div>
      <div className="date">{props.date.getDate()}</div>
    </div>
  );
}

export default DateItem;
