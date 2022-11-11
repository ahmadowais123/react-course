import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <div>
      {props.expenses.map((exp) => {
        return <ExpenseItem key={exp.id} expense={exp}/>;
      })}
    </div>
  );
}

export default ExpenseList;
