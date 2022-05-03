import React from "react";
import { Form } from "react-bootstrap";
import "./addTransactionForm.css";

const AddTransactionForm = () => {
  return (
    <Form className="form">
      <Form.Group className="formGroup">
        <Form.Select
          type="text"
          placeholder="income"
          required
          className="select input"
        >
          <option className="option" id="income">Income</option>
          <option className="option" id="expense">Expense</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="formGroup">
        <Form.Label className="label">Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="dd/mm/yyyy"
          required
          className="input"
        />
      </Form.Group>
      <Form.Group className="formGroup">
        <Form.Label className="label">Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="php 0.00"
          required
          className="input"
          id="amount"
        />
      </Form.Group>
      <Form.Group className="formGroup">
        <Form.Label className="label">Description (optional)</Form.Label>
        <Form.Control
          type="text"
          placeholder="DESCRIPTION"
          required
          className="input"
          id="description"
        />
      </Form.Group>
    </Form>
  );
};

export default AddTransactionForm;
