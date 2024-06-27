import { Component } from "@angular/core";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})

export class ContactsComponent {
  public allOk: boolean = true;
  public user_email: string = '';
  public subject: string = '';
  public message: string = '';

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_sbjfsyl', 'template_wp6qilo', e.target as HTMLFormElement, {
        publicKey: '70dkgdvS56jzbYSvp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(this.user_email);
          this.allOk = true;
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}