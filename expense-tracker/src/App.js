import "./App.css";
import React from "react";
import Card from "./components/Card";
import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2020, 7, 14),
      title: "Car Insurance",
      amount: 250,
    },
    {
      id: 2,
      date: new Date(2021, 2, 28),
      title: "Groceries",
      amount: 190.52,
    },
    {
      id: 3,
      date: new Date(2022, 8, 13),
      title: "Movie Tickets",
      amount: 25.45,
    },
    {
      id: 4,
      date: new Date(2022, 12, 13),
      title: "Chaiwala",
      amount: 5.09,
    },
  ];

  return (
    <div>
      <Card className="expenses">
        <ExpenseList expenses={expenses}/>
      </Card>
    </div>
  );
}

export default App;
