import { LoggingCheckbox } from "./logging-checkbox";

let checkbox: LoggingCheckbox;

beforeEach(() => {
  checkbox = new LoggingCheckbox();
});

describe("Logging checkbox", () => {
  it("should be created", () => {
    expect(checkbox).toBeTruthy();
  });

  it("should log action to console", () => {
    jest.spyOn(console, "log");

    checkbox.toggle();
    expect(checkbox.checked).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith("toggle");

    checkbox.uncheck();
    expect(checkbox.checked).toBeFalsy();
    expect(console.log).toHaveBeenCalledWith("uncheck");

    checkbox.check();
    expect(checkbox.checked).toBeTruthy();
    expect(console.log).toHaveBeenCalledWith("check");
  });
});
