import { AnyConstructor, Constructor } from "../base/constructor";

export type ToggleState = "on" | "off";

export declare class IsToggleable {
  protected state: ToggleState;
}

export interface CanToggle {
  toggle(): void;
}

const state = Symbol("toggle.state"); // acts as protected property

export function isToggleable<Base extends AnyConstructor>(
  base: Base
): Base & Constructor<IsToggleable & CanToggle> {
  return class extends base {
    #state: ToggleState = "off";

    protected set [state](value: ToggleState) {
      this.#state = value;
    }

    protected get [state]() {
      return this.#state;
    }

    public toggle(): void {
      this.state = this.state === "on" ? "off" : "on";
    }
  };
}
