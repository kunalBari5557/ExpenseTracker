import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./App.css";

function ExpenseChart({ expenses, selectedYear }) {
  const filteredExpenses = selectedYear
    ? expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(selectedYear)
      )
    : expenses;

  const data = [...new Array(12)].map((_, monthIndex) => {
    const monthExpenses = filteredExpenses.filter(
      (expense) => expense.date.getMonth() === monthIndex
    );
    const totalAmount = monthExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    return {
      month: new Date(0, monthIndex).toLocaleString("default", {
        month: "short",
      }),
      amount: totalAmount,
    };
  });

  return (
    <div>
      <h2 style={{ marginLeft: "6rem" }}>Expenses Chart:</h2>
      <BarChart
        width={1200}
        height={300}
        data={data}
        style={{ marginLeft: "4rem" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default ExpenseChart;
