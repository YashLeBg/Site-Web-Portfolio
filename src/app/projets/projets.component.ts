import { Component } from "@angular/core";

@Component({
  selector: "app-projets",
  templateUrl: "./projets.component.html",
  styleUrls: ["./projets.component.css"],
})
export class ProjetsComponent {
  isModal1Open = true;
  isModal2Open = true;
  isModal3Open = true;
  isModal4Open = true;
  isModal5Open = true;
  isModal6Open = true;
  isModal7Open = true;

  realiser = "#B80805";
  optimiser = "#ED8C51";
  administrer = "#EFBA12";
  gerer = "#8CC750";
  conduire = "#0B205D";
  collaborer = "#0F0F0F";

  boutonsModal1 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
    { label: "Optimiser", couleurTexte: this.optimiser },
  ];

  boutonsModal2 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
    { label: "Collaborer", couleurTexte: this.collaborer },
    { label: "Optimiser", couleurTexte: this.optimiser },
  ];

  boutonsModal3 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
  ];

  boutonsModal4 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
    { label: "Collaborer", couleurTexte: this.collaborer },
    { label: "Gérer", couleurTexte: this.gerer },
    { label: "Administrer", couleurTexte: this.administrer },
  ];

  boutonsModal5 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
  ];

  boutonsModal6 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
  ];

  boutonsModal7 = [
    { label: "Réaliser", couleurTexte: this.realiser },
    { label: "Conduire", couleurTexte: this.conduire },
    { label: "Collaborer", couleurTexte: this.collaborer },
  ];
}
