import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppWithSignal from "./AppWithSignal.tsx";
import AppWithoutSignal from "./AppWithoutSignal.tsx";

describe("AppWithSignal", () => {
  it("increments count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<AppWithSignal />);
    const button = screen.getByRole("button", { name: "Increment" });

    await user.click(button);
    expect(screen.getByText("Value: 1")).toBeVisible();

    await user.click(button);
    expect(screen.getByText("Value: 2")).toBeVisible();
  });
});

describe("AppWithoutSignal", () => {
  it("increments count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<AppWithoutSignal />);
    const button = screen.getByRole("button", { name: "Increment" });

    await user.click(button);
    expect(screen.getByText("Value: 1")).toBeVisible();

    await user.click(button);
    expect(screen.getByText("Value: 2")).toBeVisible();
  });
});
