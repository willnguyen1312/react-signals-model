import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppWithSignal from "./AppWithSignal.tsx";
import AppWithoutSignal from "./AppWithoutSignal.tsx";

describe("AppWithSignal", () => {
  it("increments count when button is clicked", async () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});
    const user = userEvent.setup();
    render(<AppWithSignal />);

    const firstNumberInput = screen.getByRole("button", {
      name: "Increment First Number",
    });
    const secondNumberInput = screen.getByRole("button", {
      name: "Increment Second Number",
    });
    expect(screen.getByText("Sum: 0")).toBeVisible();

    await user.click(firstNumberInput);
    await user.click(secondNumberInput);
    expect(screen.getByText("Sum: 2")).toBeVisible();

    expect(consoleLogSpy.mock.calls[0][0]).toBe("rendering app with signal");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("creating app model");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("sum changed 0");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("sum changed 1");
    expect(consoleLogSpy.mock.calls[4][0]).toBe("sum changed 2");
    expect(consoleLogSpy.mock.calls.length).toBe(5);
    consoleLogSpy.mockRestore();
  });
});

describe("AppWithoutSignal", () => {
  it("increments count when button is clicked", async () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});
    const user = userEvent.setup();
    render(<AppWithoutSignal />);

    const firstNumberInput = screen.getByRole("button", {
      name: "Increment First Number",
    });
    const secondNumberInput = screen.getByRole("button", {
      name: "Increment Second Number",
    });
    expect(screen.getByText("Sum: 0")).toBeVisible();

    await user.click(firstNumberInput);
    await user.click(secondNumberInput);
    expect(screen.getByText("Sum: 2")).toBeVisible();

    expect(consoleLogSpy.mock.calls[0][0]).toBe("rendering app without signal");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("sum changed 0");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("rendering app without signal");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("sum changed 1");
    expect(consoleLogSpy.mock.calls[4][0]).toBe("rendering app without signal");
    expect(consoleLogSpy.mock.calls[5][0]).toBe("sum changed 2");
    expect(consoleLogSpy.mock.calls.length).toBe(6);
    consoleLogSpy.mockRestore();
  });
});
