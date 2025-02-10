import { Component } from "@angular/core";

@Component({
  selector: "app-projets",
  templateUrl: "./projets.component.html",
  styleUrls: ["./projets.component.css"],
})
export class ProjetsComponent {
  isModal1Open = false;
  isModal2Open = false;

  boutonsModal1 = [
    { label: "Compétence A", couleurTexte: "#FF5733" },
    { label: "Compétence B", couleurTexte: "#4CAF50" },
    { label: "Compétence B", couleurTexte: "#4CAF50" },
  ];

  boutonsModal2 = [
    { label: "Compétence X", couleurTexte: "#2196F3" },
    { label: "Compétence Y", couleurTexte: "#FFC107" },
    { label: "Compétence Z", couleurTexte: "#E91E63" },
  ];

  openModal1() {
    this.isModal1Open = true;
  }

  closeModal1() {
    this.isModal1Open = false;
  }

  openModal2() {
    this.isModal2Open = true;
  }

  closeModal2() {
    this.isModal2Open = false;
  }
}
