import { AnyConstructor, Constructor } from "../base/constructor";

export type ToggleState = "on" | "off";

export declare class IsToggleable {
  protected state: ToggleState;
}

export interface CanToggle {
  toggle(): void;
  isOn(): boolean;
  isOff(): boolean;
}

const state = Symbol("toggle.state"); // acts as protected property

export function isToggleable<Base extends AnyConstructor>(
  base: Base
): Base & Constructor<IsToggleable & CanToggle> {
  return class extends base {
    #state: ToggleState = "off";

    set [state](value: ToggleState) {
      this.#state = value;
    }

    get [state]() {
      return this.#state;
    }

    public toggle(): void {
      this.state = this[state] = this[state] === "on" ? "off" : "on";
    }

    public isOn(): boolean {
      return this[state] === "on";
    }

    public isOff(): boolean {
      return this[state] === "off";
    }
  };
}
