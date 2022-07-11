import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {

    const [flag,setFlag] = useState('hidden');


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const hideForm = () => {
        
        setFlag('hidden');

    };
    

    if (flag==='shown') {
         return (
            <div className="new-expense">
                <ExpenseForm onFlagChange={hideForm} className="hidden" onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        );
    }
    const showForm = () => {
        
        setFlag('shown');

    };




    return (
        <div className="new-expense">
            <button onClick={showForm} >Add new Expense</button>
        </div>
    );
};

export default NewExpense;
