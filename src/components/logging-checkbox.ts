import { isToggleable } from "../common/toggleable";
import { isCheckbox } from "./checkbox";

export class LoggingCheckbox extends isCheckbox(isToggleable(class {})) {
  public check() {
    console.log("check");
    super.check();
  }

  public toggle() {
    console.log("toggle");
    super.toggle();
  }

  public uncheck() {
    console.log("uncheck");
    super.uncheck();
  }
}
