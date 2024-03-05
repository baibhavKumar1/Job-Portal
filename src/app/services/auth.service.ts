import { Injectable } from '@angular/core';
import { Auth, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  private authData = new BehaviorSubject<any>(null);
  authData$ = this.authData.asObservable()
  updateAuthData(data:any){
  this.authData.next(data)
  }
  constructor(private auth:Auth) { }
  // login(email:string,password:string){
  //   try{
  //     signInWithEmailAndPassword(this.auth,email,password)
  //   }
  //   catch(err:any){
  //     console.log(err.message)
  //   }
  // }
  // register(email:string,password:string){
  //   createUserWithEmailAndPassword(this.auth,email,password)
  //   .then((res)=>console.log(res))
  // }
  // googleLogin(){
  //   try{
  //     const provider = new GoogleAuthProvider();
  //     signInWithPopup(this.auth,provider)
  //     .then((res:any)=>{
  //       this.user=res._tokenResponse
  //       console.log(this.user)
  //     })
  //   }catch(err:any){
  //     console.log(err.message)
  //   }
  // }
  // githubLogin(){
  //   try{
  //     const provider = new GithubAuthProvider();
  //     signInWithPopup(this.auth,provider)
  //     .then((res)=>console.log(res))
  //   }catch(err:any){
  //     console.log(err.message)
  //   }
  // }
}
