import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
    {
        props.expenses.length <= 1 ? (
            <p>
                Viewing {props.expenses.length} expense totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}
            </p>
        ): (
            <p>
                Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}
            </p> 
        )
}
    </div>
);

const mapStatetoProps = (state) => {
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStatetoProps)(ExpensesSummary);