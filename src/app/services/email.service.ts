import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private apiUrl = "http://localhost:3000/send-email"; // URL du backend

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, emailData); // Assurez-vous que c'est une requête POST
  }
}
