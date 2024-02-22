import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';

@Component({
  selector: 'app-trial',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './trial.component.html',
  styleUrl: './trial.component.css'
})
export class TrialComponent  {
    
  @Output() addItemEvent= new EventEmitter<any>()
  constructor() { }
  
  addItem(){
    this.addItemEvent.emit("1")
  }
}
