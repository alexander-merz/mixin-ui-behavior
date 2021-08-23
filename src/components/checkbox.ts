import { Constructor } from "../base/constructor";
import { CanToggle, IsToggleable } from "../common/toggleable";

export interface ICheckbox {
  checked: boolean;
  check(): void;
  uncheck(): void;
}

export function isCheckbox<Base extends Constructor<IsToggleable & CanToggle>>(
  base: Base
): Base & Constructor<ICheckbox> {
  class CheckboxClass extends base {
    public get checked() {
      return this.state === "on";
    }

    public check(): void {
      this.state = "on";
    }

    public uncheck(): void {
      this.state = "off";
    }
  }
  return CheckboxClass as Base & Constructor<ICheckbox>;
}
