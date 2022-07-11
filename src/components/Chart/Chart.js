import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const expensesVals= props.expensesValues.map(value=> value.value);

    const maxAmount = Math.max(...expensesVals);


    return (

        <div className="chart">
            {props.expensesValues.map(expensesValue =>{
                return (  <ChartBar 
                    key={expensesValue.label}
                    label={expensesValue.label}
                    value={expensesValue.value}
                    maxValue={maxAmount}
                />);
              
            })}
        </div>
    );


};

export default Chart;