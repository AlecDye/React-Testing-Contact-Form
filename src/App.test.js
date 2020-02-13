import React from "react";
import { render, getAllByLabelText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

// Pass
test("renders App without crashing", () => {
  render(<App />);
});

// Pass
test('firstName, lastName, email, message inputs are rendered', () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
})

// test('form submit sends user data', () => {
//   const { getByLabelText } = render(<ContactForm />);

//   const firstNameInput = getByLabelText(/firstname/i);
//   const firstNameInput = getByLabelText(/firstname/i);
//   const firstNameInput = getByLabelText(/firstname/i);
// })
