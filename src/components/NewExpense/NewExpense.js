import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random(),
    };
    props.ongetExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
