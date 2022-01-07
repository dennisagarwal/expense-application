import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
