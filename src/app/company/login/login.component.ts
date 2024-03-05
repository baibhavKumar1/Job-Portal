import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data: any = {}
  constructor(private http: HttpClient,private auth:AuthService) { }
  onFileChange(event: any) {
    if (event.target.type == "file") {
      this.data.avatar = event.target.files[0];
    } else {
      const { name, value } = event.target;
      this.data[name] = value;
    }
  }
  sendSignInData() {
    try {
      this.http.post(`http://localhost:3000/company/login`, this.data)
        .subscribe(
          (response:any) => {
            console.log('Data sent successfully:', response);
            const {token,user}=response;
            const {name}= user;
            localStorage.setItem('token',token)
            localStorage.setItem('name',name)
            this.auth.updateAuthData(name)
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
