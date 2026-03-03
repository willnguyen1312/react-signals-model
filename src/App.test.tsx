import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import AppWithSignal from "./AppWithSignal.tsx";
import { AppModel } from "./model";
import AppWithoutSignal from "./AppWithoutSignal.tsx";

const assertWorkingApp = async ({ user }: { user: UserEvent }) => {
  const firstNumberInput = screen.getByRole("button", {
    name: "Increment First Number",
  });
  expect(screen.getByText("First Number: 0")).toBeVisible();
  const secondNumberInput = screen.getByRole("button", {
    name: "Increment Second Number",
  });
  expect(screen.getByText("Second Number: 0")).toBeVisible();
  expect(screen.getByText("Sum: 0")).toBeVisible();

  await user.click(firstNumberInput);
  expect(screen.getByText("First Number: 1")).toBeVisible();
  expect(screen.getByText("Sum: 1")).toBeVisible();
  await user.click(secondNumberInput);
  expect(screen.getByText("Second Number: 1")).toBeVisible();
  expect(screen.getByText("Sum: 2")).toBeVisible();
};

describe("AppWithoutSignal", () => {
  it("increments count when button is clicked", async () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});
    const user = userEvent.setup();
    render(<AppWithoutSignal />);

    await assertWorkingApp({ user });

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

describe("AppWithSignal", () => {
  it("increments count when button is clicked", async () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});
    const user = userEvent.setup();
    render(<AppWithSignal />);

    await assertWorkingApp({ user });

    expect(consoleLogSpy.mock.calls[0][0]).toBe("rendering app with signal");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("creating app model");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("sum changed 0");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("sum changed 1");
    expect(consoleLogSpy.mock.calls[4][0]).toBe("sum changed 2");
    expect(consoleLogSpy.mock.calls.length).toBe(5);
    consoleLogSpy.mockRestore();
  });
});

describe("AppModel", () => {
  it("works without UI", () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});
    const {
      firstNumber,
      secondNumber,
      sum,
      incrementFirstNumber,
      incrementSecondNumber,
    } = new AppModel();

    expect(firstNumber.value).toBe(0);
    expect(secondNumber.value).toBe(0);
    expect(sum.value).toBe(0);

    incrementFirstNumber();
    expect(firstNumber.value).toBe(1);
    expect(sum.value).toBe(1);

    incrementSecondNumber();
    expect(secondNumber.value).toBe(1);
    expect(sum.value).toBe(2);

    expect(consoleLogSpy.mock.calls[0][0]).toBe("creating app model");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("sum changed 0");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("sum changed 1");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("sum changed 2");
    expect(consoleLogSpy.mock.calls.length).toBe(4);
    consoleLogSpy.mockRestore();
  });
});
