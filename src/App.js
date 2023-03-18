import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState(null);

  const addExpense = expense => {
    setExpenses([...expenses, expense]);
    filterExpensesByYear(filterYear, [...expenses, expense]);
  };

  const filterExpensesByYear = (year, expensesToFilter = expenses) => {
    const filteredExpenses = expensesToFilter.filter(
      expense => !year || expense.date.getFullYear() === parseInt(year, 10)
    );
    setFilteredExpenses(filteredExpenses);
    setFilterYear(year);
  };

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList
        expenses={filteredExpenses}
        filterExpensesByYear={filterExpensesByYear}
      />
      <ExpenseChart expenses={expenses} filterYear={filterYear} />
    </div>
  );
}

export default App;
