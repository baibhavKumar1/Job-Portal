import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapPersonCircle} from '@ng-icons/bootstrap-icons'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TrialService } from '../../services/trial.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,NgIconComponent,MatButtonModule,MatMenuModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  viewProviders:[provideIcons({bootstrapPersonCircle})]
})
export class NavComponent implements OnInit{
  value:any='non'
  constructor(public auth:AuthService,public trial:TrialService){
   this.trial.data$.subscribe((res)=>this.value=res) 
  }
  name:any
  setUser:any;
  ngOnInit(): void {
    const setName =  localStorage.getItem('name');
    if(setName){
      this.name= setName
      console.log(this.name);
    }else{
    this.auth.authData$.subscribe((data)=>{
      this.name=data;
      console.log(data)
    })}
  }  
  handleLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
  }
}
