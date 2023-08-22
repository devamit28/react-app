import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangehandller = (event) => {
    setTitle(event.target.value);
  };
  const amountChangehandller = (event) => {
    setAmount(event.target.value);
  };
  const dateChangehandller = (event) => {
    setDate(event.target.value);
  };

  const submitFormhandller = (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onsaveExpenseData(formData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitFormhandller}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangehandller} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangehandller}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangehandller} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
