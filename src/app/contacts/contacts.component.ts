import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  phoneNumber: string = '0639683015';
  email: string = 'yash.mohamed976@gmail.com';
  copiedPhone: boolean = false;
  copiedEmail: boolean = false;

  copyPhoneNumber() {
    navigator.clipboard.writeText(this.phoneNumber).then(() => {
      this.copiedPhone = true;
      setTimeout(() => this.copiedPhone = false, 2000);
    });
  }

  copyEmailAndOpen() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copiedEmail = true;
      setTimeout(() => this.copiedEmail = false, 2000);
      window.location.href = `mailto:${this.email}`;
    });
  }
}

// import { Component } from "@angular/core";
// import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

// @Component({
//   selector: "app-contacts",
//   templateUrl: "./contacts.component.html",
//   styleUrls: ["./contacts.component.css"],
// })

// export class ContactsComponent {
//   public allOk: boolean = true;
//   public user_email: string = '';
//   public subject: string = '';
//   public message: string = '';

//   public sendEmail(e: Event) {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_sbjfsyl', 'template_wp6qilo', e.target as HTMLFormElement, {
//         publicKey: '70dkgdvS56jzbYSvp',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           console.log(this.user_email);
//           this.allOk = true;
//           alert('Mail envoyé avec succès !');
//         },
//         (error) => {
//           console.log('FAILED...', (error as EmailJSResponseStatus).text);
//         },
//       );
//   }
// }
