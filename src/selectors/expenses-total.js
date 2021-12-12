export default (expenses = []) => {
    return expenses.reduce(
        (previousValue, { amount }) =>
            previousValue + amount, 0
    );
    
};