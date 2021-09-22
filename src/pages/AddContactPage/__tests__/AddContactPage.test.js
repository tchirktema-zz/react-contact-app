import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddContactPage from "../AddContactPage";

const MockAddContactPage = () => {
  return (
    <BrowserRouter>
      <AddContactPage />
    </BrowserRouter>
  );
};

describe("Test for ListContact page", () => {
  it("should be able to render Add Contact  page", () => {
    render(<MockAddContactPage />);
    const firstNameElement = screen.getByPlaceholderText(/Firstname/i);
    const lastNameElement = screen.getByPlaceholderText(/LastName/i);
    const phoneElement = screen.getByPlaceholderText(/Phone/i);
    const buttonElement = screen.getByText(/ADD CONTACT/i);
    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
