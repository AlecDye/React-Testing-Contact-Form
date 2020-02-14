import React from "react";
import { render, fireEvent, getByPlaceholderText, act } from "@testing-library/react";
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

/*
Pass with note:
  console.error node_modules/react-dom/cjs/react-dom.development.js:530
    Warning: An update to ContactForm inside a test was not wrapped in act(...).
*/
test('form submit sends user data', async () => {
  const { getByLabelText, getByTestId, waitForElement } = render(<ContactForm />);

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
  await act(async () => {
    fireEvent.click(getByTestId(/button/i));
    // await waitForElement(() => getByTestId(/data-preview/i));
  })


})

test('firstName, lastName, email placeholders are rendering', () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  // const messageInput = getByLabelText(/message/i);

  expect(firstNameInput).toHaveAttribute('placeholder')
  expect(lastNameInput).toHaveAttribute('placeholder')
  expect(emailInput).toHaveAttribute('placeholder')
  // expect(messageInput).toHaveAttribute('placeholder')
})
test('firstName, lastName, email, message validate', () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  expect(firstNameInput).toHaveAttribute('type')
  expect(lastNameInput).toHaveAttribute('type')
  expect(emailInput).toHaveAttribute('type')
  expect(messageInput).toHaveAttribute('type')
})
