import { fireEvent, render } from "@testing-library/react";

import { HoverMenuSimpleExample } from "./HoverMenuSimpleExample";

describe("HoverMenuSimpleExample", () => {
  it("renders color", async () => {
    const { getByText } = render(<HoverMenuSimpleExample />);

    const menuButton = getByText(/Green/i);

    expect(menuButton).toBeInTheDocument();

    fireEvent(
      menuButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
