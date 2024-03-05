import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { TrialService } from '../../services/trial.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private trial:TrialService){}
 profile:any;
 ngOnInit(): void {
  this.trial.updateData(this.profile)
}
}
