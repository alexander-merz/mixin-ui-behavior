import { Constructor } from "../base/constructor";
import { CanToggle, IsToggleable } from "../common/toggleable";

export interface Checkbox extends IsToggleable, CanToggle {
  checked: boolean;
  check(): void;
  uncheck(): void;
}

export function isCheckbox<Base extends Constructor<IsToggleable & CanToggle>>(
  base: Base
): Base & Constructor<Checkbox> {
  return class extends base {
    public get checked() {
      return this.state === "on";
    }

    public check(): void {
      this.state = "on";
    }

    public uncheck(): void {
      this.state = "off";
    }
  };
}
