import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapStarFill} from '@ng-icons/bootstrap-icons'
@Component({
  selector: 'app-company',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders:[provideIcons({bootstrapStarFill})],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

}
