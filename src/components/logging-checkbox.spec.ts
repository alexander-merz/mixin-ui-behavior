import { LoggingCheckbox } from "./logging-checkbox";

let checkbox: LoggingCheckbox;

beforeEach(() => {
  checkbox = new LoggingCheckbox();
});

describe("Logging Checkbox", () => {
  it("should be instantiated", () => {
    expect(checkbox).toBeTruthy();
  });

  it("should log action to console", () => {
    jest.spyOn(console, "log");
    checkbox.toggle();
    expect(checkbox.checked).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith("toggle");
  });
});
