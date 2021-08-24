import { Constructor } from "../base/constructor";
import { IsToggleable, state, ToggleState } from "../common/toggleable";

export interface Checkbox extends IsToggleable {
  checked: boolean;
  check(): void;
  uncheck(): void;
}

export function isCheckbox<Base extends Constructor<IsToggleable>>(
  base: Base
): Base & Constructor<Checkbox> {
  return class extends base {
    [state]: ToggleState;

    public get checked() {
      return this[state] === "on";
    }

    public set checked(value: boolean) {
      this[state] = value ? "on" : "off";
    }

    public check(): void {
      this.checked = true;
    }

    public uncheck(): void {
      this.checked = false;
    }
  };
}
