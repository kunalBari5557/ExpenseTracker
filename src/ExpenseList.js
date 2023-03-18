import React from "react";
import "./App.css";

function ExpenseList({ expenses, filterExpensesByYear }) {
  const handleChange = (event) => {
    filterExpensesByYear(event.target.value);
  };

  return (
    <div className="expense-list-container">
      <h2 style={{ marginLeft: "5rem" }}>Expenses List</h2>
      <div className="filter">
        <h2 style={{ marginLeft: "5rem" }} htmlFor="year">
          Filter by Year:
        </h2>
        <select id="year" onChange={handleChange}>
          <option value="">All</option>
          {[
            ...new Set(expenses.map((expense) => expense.date.getFullYear())),
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <table className="table" style={{ marginLeft: "5rem" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
