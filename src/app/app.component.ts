import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          maxHeight: "500px",
          opacity: 1,
        })
      ),
      transition(":enter", [
        style({ maxHeight: "0px", opacity: 0 }),
        animate("0.5s ease-out"),
      ]),
      transition(":leave", [
        animate("0.5s ease-out", style({ maxHeight: "0px", opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = "site-cv";
}
