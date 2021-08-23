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

  it("should toggle state", () => {
    checkbox.toggle();
    expect(checkbox.checked).toBeTruthy();
  });

  it("should not expose private state property", () => {
    const typeAgnosticCheckbox = checkbox as any;
    expect("#state" in typeAgnosticCheckbox).toBeFalsy();
    expect(typeAgnosticCheckbox["#state"]).toBeUndefined();
  });

  it("should not expose state setter and getter due to Symbol", () => {
    const typeAgnosticCheckbox = checkbox as any;
    expect("state" in typeAgnosticCheckbox).toBeFalsy();
    expect(typeAgnosticCheckbox.state).toBeUndefined();
    expect(typeAgnosticCheckbox["state"]).toBeUndefined();
  });
});
