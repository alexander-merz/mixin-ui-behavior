import { AnyConstructor, Constructor } from "../base/constructor";

export type ToggleState = "on" | "off";

export interface IsToggleable {
  readonly state: ToggleState;
  toggle(): void;
  isOn(): boolean;
  isOff(): boolean;
}

export const state = Symbol("toggle.state");

export function isToggleable<Base extends AnyConstructor>(
  base: Base
): Base & Constructor<IsToggleable> {
  return class extends base {
    [state]: ToggleState = "off";

    public get state() {
      return this[state];
    }

    public toggle(): void {
      this[state] = this[state] === "on" ? "off" : "on";
    }

    public isOn(): boolean {
      return this[state] === "on";
    }

    public isOff(): boolean {
      return this[state] === "off";
    }
  };
}
