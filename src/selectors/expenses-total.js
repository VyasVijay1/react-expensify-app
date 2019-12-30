export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((s, value) => s + value, 0);
  };
  