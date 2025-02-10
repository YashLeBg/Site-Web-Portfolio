import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-competences",
  templateUrl: "./card-competences.component.html",
  styleUrls: ["./card-competences.component.css"],
})
export class CardCompetencesComponent {
  @Input() titre: string = "";
  @Input() description: string = "";
  @Input() couleurTitre: string = "black";
}
