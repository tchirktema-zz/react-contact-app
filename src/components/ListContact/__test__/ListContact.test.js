import { render, screen} from "@testing-library/react";
import ListContact from "../ListContact";


const initialContact = [
  {
    firstName: "john",
    lastName: "tommy",
    phone: "+34394340349304",
  },
  {
    firstName: "john",
    lastName: "tommy",
    phone: "+34394340349304",
  },
];

describe("ListContact", () => {
  it("should render search List contact element", () => {
    render(<ListContact contacts={initialContact} />);
    const paragraphElement = screen.getAllByText(/john tommy/i);
    expect(paragraphElement.length).toBe(2);
  });

});
