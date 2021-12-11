import uuid from 'uuid';

//add_expense
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//remove_expense
export const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit_expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});