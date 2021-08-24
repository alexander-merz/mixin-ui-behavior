import { isToggleable } from "../common/toggleable";
import { isCheckbox } from "./checkbox";

export class LoggingCheckbox extends isCheckbox(isToggleable(class {})) {
  public check(): void {
    console.log("check");
    super.check();
  }

  public toggle(): void {
    console.log("toggle");
    super.toggle();
  }

  public uncheck(): void {
    console.log("uncheck");
    super.uncheck();
  }
}
