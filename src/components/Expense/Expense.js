import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("0");
  const expenseFilterChange = (expenseFilter) => {
    setSelectedYear(expenseFilter);
  };

  let filteredExpenses = [];
  if (selectedYear === "0") {
    filteredExpenses = props.expenses;
  } else {
    filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        onexpenseFilterChange={expenseFilterChange}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expense;
