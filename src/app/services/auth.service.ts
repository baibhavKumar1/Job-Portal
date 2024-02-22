import { Injectable } from '@angular/core';
import { Auth, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }
  login(email:string,password:string){
    try{
      signInWithEmailAndPassword(this.auth,email,password)
      .then((res)=>console.log(res))
    }
    catch(err:any){
      console.log(err.message)
    }
  }
  register(email:string,password:string){
    createUserWithEmailAndPassword(this.auth,email,password)
    .then((res)=>console.log(res))
  }
  githubLogin(){
    try{
      const provider = new GithubAuthProvider();
      signInWithPopup(this.auth,provider)
      .then((res)=>console.log(res))
    }catch(err:any){
      console.log(err.message)
    }
  }
}
