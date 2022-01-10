import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id:"e1",
    title: "Wifi",
    amount: "8",
    date: new Date(2021, 2, 28),
  },
  {
    id:"e2",
    title: "Commute",
    amount: "12",
    date: new Date(2021, 2, 28),
  },
  {
    id:"e3",
    title: "Grocery",
    amount: "10",
    date: new Date(2021, 2, 28),
  },
  {
    id:"e4",
    title: "Rent",
    amount: "20",
    date: new Date(2021, 2, 28),
  },
];

function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{ return[expense,...prevExpenses]})
    console.log(expense);
    console.log("in app.js");
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}> </NewExpense>
      <Expenses items={expenses}></Expenses>
    </>
  );
}

export default App;
