import { IsToggleable, isToggleable } from "./toggleable";

const ToggleableClass = isToggleable(class {});
let toggle: IsToggleable;

beforeEach(() => {
  toggle = new ToggleableClass();
});

describe("Toggleable behavior", () => {
  it("should", () => {
    expect(toggle).toBeTruthy();
  });

  it("should be off per default", () => {
    expect(toggle.isOff()).toBeTruthy();
  });

  it("should toggle", () => {
    toggle.toggle();
    expect(toggle.isOn()).toBeTruthy();
    toggle.toggle();
    expect(toggle.isOff()).toBeTruthy();
  });
});
