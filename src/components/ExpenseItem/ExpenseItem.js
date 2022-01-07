import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // const [title, setTitle] = useState(props.title);
  // const clickHandle = () => {
  //   setTitle("updated");
  //   console.log("Clicked!");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandle}> Click ME!</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
