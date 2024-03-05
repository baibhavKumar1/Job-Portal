import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
  getData(){
    this.http.get('http://localhost:3000/candidate').subscribe((res)=>console.log(res))
  }
  sendSignUpData() {
    try {
      
      this.http.post(`http://localhost:3000/candidate/register`, this.data)
        .subscribe(
          (response) => {
            console.log('Data sent successfully:', response);
            this.auth.updateAuthData(response)
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
  sendDataToService(){

  }
}
