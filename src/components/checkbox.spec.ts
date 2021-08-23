import { isToggleable } from "../common/toggleable";
import { Checkbox, isCheckbox } from "./checkbox";

const CheckboxClass = isCheckbox(isToggleable(class {}));
let checkbox: Checkbox;

beforeEach(() => {
  checkbox = new CheckboxClass();
});

describe("Checkbox", () => {
  it("should be instantiated", () => {
    expect(checkbox).toBeTruthy();
  });

  it("should be unchecked per default", () => {
    expect(checkbox.checked).toBeFalsy();
  });

  it("should check", () => {
    checkbox.check();
    expect(checkbox.checked).toBeTruthy();
  });

  it("should uncheck", () => {
    checkbox.check();
    expect(checkbox.checked).toBeTruthy();
    checkbox.uncheck();
    expect(checkbox.checked).toBeFalsy();
  });
});
