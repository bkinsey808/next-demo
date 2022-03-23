import { fireEvent, render, within } from "@testing-library/react";

import { HoverMenuSimpleExample } from "./HoverMenuSimpleExample";

describe("HoverMenuSimpleExample", () => {
  it("renders color", async () => {
    const { getByLabelText, getByText, asFragment } = render(
      <HoverMenuSimpleExample />
    );
    expect(asFragment()).toMatchSnapshot();

    const menuButton = await getByLabelText(/select color/i);
    expect(menuButton).toBeInTheDocument();

    // click doesn't work because of hover menu implementation
    fireEvent.mouseDown(menuButton);

    const redButton = await getByText(/Red/i);
    fireEvent.click(redButton);
    const { getByText: menuButtonGetByText } = within(menuButton);

    // Confirm color was selected. Will throw error if not found.
    menuButtonGetByText(/Red/i);
    expect(asFragment()).toMatchSnapshot();
  });
});
