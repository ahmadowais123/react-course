import DateItem from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {

  const expenseDate = props.expense.date;
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <div>
      <Card className="expense-item">
        <DateItem date={expenseDate}></DateItem>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">{`$${expenseAmount}`}</div>
        </div>
      </Card>
    </div>
  );
}

export default ExpenseItem;
