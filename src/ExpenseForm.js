import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const expense = { title, amount: +amount, date: new Date(date) };
    addExpense(expense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <Container className="expense-form">
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                id="amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                id="amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </Form.Group> */}
            {/* <Form.Group>
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </Form.Group> */}
            <Button type="submit" variant="primary">Add Expense</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExpenseForm;
