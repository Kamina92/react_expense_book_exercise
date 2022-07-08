import ExpenseItem from './ExpenseItem';
import Card from './Card';

import './Expenses.css'

function Expenses (props) {

    const expenses = props.items;
    

      let expenses_items = [];
      
      expenses.forEach(expense => {
        expenses_items.push(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
          
      });
      

      return (
        <Card className="expenses">
            {expenses_items}
        </Card>
      );

}

export default Expenses;