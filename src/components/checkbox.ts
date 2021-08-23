import { ToggleState } from "../../dist/index";
import { Constructor } from "../base/constructor";
import { IsToggleable, state } from "../common/toggleable";

export interface Checkbox extends IsToggleable {
  checked: boolean;
  check(): void;
  uncheck(): void;
}

export function isCheckbox<Base extends Constructor<IsToggleable>>(
  base: Base
): Base & Constructor<Checkbox> {
  return class extends base {
    [state]: ToggleState = "off";

    public get checked() {
      return this[state] === "on";
    }

    public check(): void {
      this[state] = "on";
    }

    public uncheck(): void {
      this[state] = "off";
    }
  };
}
