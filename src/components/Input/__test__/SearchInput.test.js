import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

const mockedSearchQuery= jest.fn();

describe("Search",() => {
    it("should render search input element", () => {
      render(<SearchInput />);
      const inputElement = screen.getByPlaceholderText(/Search Contacts/i);
      expect(inputElement).toBeInTheDocument();
    });

    it("should able to type in search input", () => {
      render(<SearchInput searchQuery={mockedSearchQuery} />);
      const inputElement = screen.getByPlaceholderText(/Search Contacts/i);
      fireEvent.click(inputElement, { target: { value: "Joshua" } });
      expect(inputElement.value).toBe("Joshua");
    });
})