import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  // uploadResume(candidate: any): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('resume', candidate.resume);

  //   return this.http.post(`${this.baseUrl}/:id/upload`, formData);
  // }
}
