const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load 2 input box", () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole("textbox");
    expect(textboxes.length).toBe(2);
  });
});
