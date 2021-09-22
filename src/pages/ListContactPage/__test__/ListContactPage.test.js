import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListContactPage from "../ListContactPage";

const initialContact = [
  {
    firstName: "john",
    lastName: "tommy",
    phone: "+34394340349304",
  },
  {
    firstName: "joe",
    lastName: "doe",
    phone: "+34394340349304",
  },
];

const MockSearchQuery = jest.fn();
const MockListContactPage = () => {
    return (
      <BrowserRouter>
        <ListContactPage
          searchResults={initialContact}
          contacts={initialContact}
          searchQuery={MockSearchQuery}
        />
      </BrowserRouter>
    );
}



describe("Test for ListContact page",() =>{
    it('should be able to render ListContact page',() =>{
        render(<MockListContactPage/>)
        const inputElement = screen.getByPlaceholderText(/Search Contacts/i);
        const paragraphElement = screen.getAllByText(/joe doe/i);
        expect(paragraphElement.length).toBe(1);
        expect(inputElement).toBeInTheDocument();
    })

    it('should able to make a search',() => {
        render(<MockListContactPage />);
        const inputElement = screen.getByPlaceholderText(/Search Contacts/i);
        fireEvent.change(inputElement, { target: { value: "joe" } });
        const divElements = screen.queryAllByText(/joe/i);
        const spanElement = screen.getByText(/Now showing 2 of 2/i);
        expect(divElements.length).toBe(1);
        expect(spanElement).toBeInTheDocument();
        const buttonElement = screen.getByRole("button", { name: /show all/i });
        fireEvent.click(buttonElement);
        const paragraphElement = screen.getAllByText(/joe doe/i);
        expect(paragraphElement.length).toBe(1);
    })

});