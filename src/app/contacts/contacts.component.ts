import { Component } from "@angular/core";
import { EmailService } from "../services/email.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent {
  public allOk: boolean = true;

  constructor(private emailService: EmailService) {}

  sendEmail(form: any) {
    if (form.valid) {
      this.emailService.sendEmail(form.value).subscribe(
        (response) => {
          console.log("E-mail envoyé avec succès", response);
          form.resetForm();
          this.allOk = true;
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
        }
      );
    } else {
      console.error("Le formulaire n'est pas valide");
      this.allOk = false;
    }
  }
}
