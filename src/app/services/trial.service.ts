import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  //http= inject(HttpClient)
  private baseUrl = 'http://localhost:3000'; // Replace with your server URL

  updateData(data:any){
    this.dataSubject.next(data)
  }
  constructor() { }
  

}
