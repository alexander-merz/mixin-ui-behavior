import { isToggleable } from "../common/toggleable";
import { isCheckbox } from "./checkbox";

export class LoggingCheckbox extends isCheckbox(isToggleable(class {})) {
  public toggle() {
    console.log("toggle");
    super.toggle();
  }

  public check() {
    console.log("check");
    super.check();
  }

  public uncheck() {
    console.log("uncheck");
    super.uncheck();
  }
}
