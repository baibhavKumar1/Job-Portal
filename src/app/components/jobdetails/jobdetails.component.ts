import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-jobdetails',
  standalone: true,
  imports: [],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.css'
})
export class JobdetailsComponent implements OnInit{
 constructor(private route:ActivatedRoute,private http:HttpClient){}
 jobId:any;
 job:any
 ngOnInit(){
  this.route.paramMap.subscribe(params=>{
      this.jobId=params.get('id')
      console.log(this.jobId)
  }) 
  this.http.get(`http://localhost:3000/job/${this.jobId}`).subscribe((res)=>{
    console.log(res)
    this.job=res
  })
}
}
