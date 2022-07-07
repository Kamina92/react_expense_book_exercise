import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses (props) {

    const expenses = props.items;
    

      let expenses_items = [];
      
      expenses.forEach(expense => {
        expenses_items.push(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
          
      });
      

      return (
        <div className="expenses">
            {expenses_items}
        </div>
      );

}

export default Expenses;