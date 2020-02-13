import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

// Pass
test("renders App without crashing", () => {
  render(<App />);
});

// Pass
test('firstName, lastName, email inputs are rendered', () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
})
