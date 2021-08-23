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
    expect(console.log).toHaveBeenCalledWith("toggle");
    expect(checkbox.checked).toBeTruthy();

    checkbox.uncheck();
    expect(console.log).toHaveBeenCalledWith("uncheck");
    expect(checkbox.checked).toBeFalsy();

    checkbox.check();
    expect(console.log).toHaveBeenCalledWith("check");
    expect(checkbox.checked).toBeTruthy();
  });
});
