import React from "react";
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";


describe("App", () => {
  test("renders header without crashing", () => {
    render(<App />);
    expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  });

  test("renders all emoji without crashing", () => {
    render(<App />);
    expect(screen.getAllByTestId("emoji-result-row")).toHaveLength(20);
  });

  test("renders search input without crashing", () => {
    render(<App />);
    let searchText = "100";
    const searchInput = screen.getAllByPlaceholderText("Search");
    userEvent.type(searchInput, searchText);
    expect(screen.getByText(searchText)).toBeInTheDocument();
  });

  test("Emoji kopyalanır", () => {
    const item = screen.getByText("Click to copy emoji");
    item.click();
    expect(item).toHaveAttribute("data-clipboard-text", "Click to copy emoji");
  });

  // TODO //
  // test("copy to clipboard when clicked", async () => {
  //   render(<App />);
  //   const user = userEvent.setup();
  //   let clickableText = await screen.getAllByTestId("emoji-result-row")[0].textContent;
  //   console.log("clickableText", clickableText);
  //   userEvent.click(clickableText);
  //   const contents = await navigator.clipboard.readText();
  //   console.log("contents", contents);
  // });
  // TODO //

});
