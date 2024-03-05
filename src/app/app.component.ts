import { CompanyComponent } from './pages/company/company.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { TrialComponent } from './components/trial/trial.component';
import { JobComponent } from './company/job/job.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './candidate/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './module/interceptor/interceptor.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,NavComponent,FooterComponent,InterceptorModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobportal';
  constructor(private route: ActivatedRoute){}
  
}
