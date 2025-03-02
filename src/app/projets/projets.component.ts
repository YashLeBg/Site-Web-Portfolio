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

  boutonsModal1 = [
    { label: "Réaliser", couleurTexte: "#FF5733" },
    { label: "Optimiser", couleurTexte: "#4CAF50" },
    { label: "Optimiser", couleurTexte: "#4CAF50" },
    { label: "Optimiser", couleurTexte: "#4CAF50" },
    { label: "Optimiser", couleurTexte: "#4CAF50" },
  ];

  boutonsModal2 = [
    { label: "Compétence X", couleurTexte: "#2196F3" },
    { label: "Compétence Y", couleurTexte: "#FFC107" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
  ];

  boutonsModal3 = [
    { label: "Technologie X", couleurTexte: "#2196F3" },
    { label: "Technologie Y", couleurTexte: "#FFC107" },
    { label: "Technologie Z", couleurTexte: "#E91E63" },
  ];

}
