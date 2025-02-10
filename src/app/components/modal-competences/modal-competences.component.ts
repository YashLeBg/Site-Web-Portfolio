import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal-competences",
  templateUrl: "./modal-competences.component.html",
  styleUrls: ["./modal-competences.component.css"],
})
export class ModalCompetencesComponent {
  @Input() boutons: { label: string; couleurTexte: string }[] = [];
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
