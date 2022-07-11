import React, {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

import './Expenses.css'

function Expenses (props) {

    const [selectedDate, setSelectedDate] = useState('2022');

    const filteredExpenses = props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===selectedDate;
    });

    // let expenses_items = [];
      
    // expenses.forEach(expense => {
      
    //   expenses_items.push(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
          
    // });

    const getSelectedDate = (date) => {
      // console.log('This is Expense.js');
      // console.log(date);
      setSelectedDate(date);
    };

    // let ExpenseItemContent = <p>No expense found</p>;

    // if (filteredExpenses.length > 0) {
    //   ExpenseItemContent = filteredExpenses.map(expense=>{
    //     return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
    //   })
    // }
      

    return (
      <div>
        <Card className="expenses">
        <div>
          <ExpensesFilter selectedDate={selectedDate} onSelectedDate={getSelectedDate} />
        </div>
            <ExpensesList items = {filteredExpenses} />
        </Card>
      </div>
    );

}

export default Expenses;