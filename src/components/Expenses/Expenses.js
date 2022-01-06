import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'
import Card from '../Card/Card'

function Expenses(props) {
  return (
    <Card className="expenses">
    <h2>Let's get started!</h2>
    <ExpenseItem
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
    ></ExpenseItem>
  </Card>
  )
}

export default Expenses
