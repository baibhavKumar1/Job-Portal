import { Routes } from '@angular/router';
import { TrialComponent } from './components/trial/trial.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './candidate/profile/profile.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { LoginComponent as CandidateLogin} from './candidate/login/login.component';
import { LoginComponent} from './company/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"trial", component:TrialComponent},
    {path:"job", component:JobComponent},
    {path:"candidate", component:CandidateComponent},
    {path:"company", component:CompanyComponent},
    {path:'profile',component:ProfileComponent},
    {path:'job/details',component:JobdetailsComponent},
    {path:'candidate/login',component:CandidateLogin},
    {path:'company/login',component:LoginComponent}
];
