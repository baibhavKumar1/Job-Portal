import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data: any = {}
  constructor(private http: HttpClient) { }
  onFileChange(event: any) {
    const { name, value } = event.target;
    this.data[name] = value;
  }
  sendSignInData() {
    console.log('hi')
    try {
      this.http.post(`http://localhost:3000/candidate/login`, this.data)
        .subscribe(
          (response) => {
            console.log('Data sent successfully:', response);
          },
          (error) => {
            console.error('Error sending data:', error);
          }
        );
    }
    //}
    catch (err) {
      console.log(err)
    }
  }
}
