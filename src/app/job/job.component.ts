import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider'
import {MatChipsModule} from '@angular/material/chips'
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterModule,MatSliderModule,MatChipsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
a:string='hi'
}
