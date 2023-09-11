import { render, fireEvent } from "@testing-library/react";
import CounterDevice from "./CounterDevice";

describe(CounterDevice, () => {
  it("CounterDevice without props", () => {
    const { getByTestId } = render(<CounterDevice />);
    expect(Number(getByTestId("count").textContent)).toBe(0);
  });

  it("CounterDevice with a count prop", () => {
    const { getByTestId } = render(<CounterDevice count={7} />);
    expect(Number(getByTestId("count").textContent)).toBe(7);
  });

  describe("CounterDevice check initial count - test with multiple values", () => {
    const testCases = [
      [0, 0],
      [7, 7],
      [42, 42],
      [-1, -1],
      [-99, -99],
    ];
    test.each(testCases)("initial count %p", (count, expectedValue) => {
      const { getByTestId } = render(<CounterDevice count={count} />);
      expect(Number(getByTestId("count").textContent)).toBe(expectedValue);
    });
  });

  it("The counter should be incremented by 1", () => {
    const { getByTestId, getByRole } = render(<CounterDevice />);
    const incrementButton = getByRole("button", { name: "Increment" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(incrementButton);
    expect(Number(getByTestId("count").textContent)).toEqual(1);
  });

  it("The counter should be decremented by 1", () => {
    const { getByTestId, getByRole } = render(<CounterDevice />);
    const decrementButton = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementButton);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  it("The counter should be set to 0", () => {
    const { getByTestId, getByRole } = render(<CounterDevice count={42} />);
    const initButton = getByRole("button", { name: "Init" });
    expect(Number(getByTestId("count").textContent)).toEqual(42);
    fireEvent.click(initButton);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
});
