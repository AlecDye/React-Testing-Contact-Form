import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

test('form submit sends user data', () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: 'Banana' } })
  fireEvent.change(lastNameInput, { target: { value: 'Foobar' } })
  fireEvent.change(emailInput, { target: { value: 'Banana@email.com' } })
  fireEvent.change(messageInput, { target: { value: 'Bananas are great' } })

  expect(firstNameInput.value).toBe('Banana');
  expect(lastNameInput.value).toBe('Foobar');
  expect(emailInput.value).toBe('Banana@email.com');
  expect(messageInput.value).toBe('Bananas are great');

  // no text "submit", button is an input
  fireEvent.click(getByTestId(/submit button/i));

})
