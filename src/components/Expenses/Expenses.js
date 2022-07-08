import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';

import './Expenses.css'

function Expenses (props) {

    const [selectedDate, setSelectedDate] = useState('2022');

    const expenses = props.items;

    let expenses_items = [];
      
    expenses.forEach(expense => {
      
      expenses_items.push(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
          
    });

    const getSelectedDate = (date) => {
      // console.log('This is Expense.js');
      // console.log(date);
      setSelectedDate(date);
    };
      

    return (
      <div>
        <Card className="expenses">
        <div>
          <ExpensesFilter selectedDate={selectedDate} onSelectedDate={getSelectedDate} />
        </div>
            {expenses_items}
        </Card>
      </div>
    );

}

export default Expenses;