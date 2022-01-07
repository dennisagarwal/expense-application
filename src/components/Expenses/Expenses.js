import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  //filter the year
const filteredExpenses = props.items.filter((expense)=>{
  return expense.date.getFullYear().toString()===filteredYear;
})

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

// Alternate conditional statement way

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      ></ExpensesFilter>
      <li>
      <Card className="expenses">
        <h2>Let's get started!</h2>
{/* filtered expense with conditional statement */}

{/* Alternate trick for if statement with && operator*/}
{/* {filteredExpenses.length===0 && <p>No Expenses Found</p>}
{filteredExpenses.length>0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
{/* {filteredExpenses.length===0?(<p>No Expenses Found</p>):(filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        )))} */}

<ExpensesList items={filteredExpenses}></ExpensesList>
        {/* filtering the items */}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        ></ExpenseItem> */}
      </Card>
      </li>
    </div>
  );
}

export default Expenses;
