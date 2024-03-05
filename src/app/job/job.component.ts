import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider'
import {MatChipsModule} from '@angular/material/chips'
import {HttpClient} from '@angular/common/http'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterModule,MatSliderModule,MatChipsModule,CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})

export class JobComponent implements OnInit{
  jobs:any
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get('http://localhost:3000/job').subscribe((res)=>
    {
      this.jobs=res;
      console.log(res)
    })
  }
a:string='hi'
}

