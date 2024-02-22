import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapPersonCircle} from '@ng-icons/bootstrap-icons'
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,NgIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  viewProviders:[provideIcons({bootstrapPersonCircle})]
})
export class NavComponent {
onSubmit(){
  
}
}
