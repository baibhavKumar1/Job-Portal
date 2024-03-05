import { ProfileComponent } from './company/profile/profile.component';
import { Routes } from '@angular/router';
import { TrialComponent } from './components/trial/trial.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './pages/candidate/candidate.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent as CandidateProfile} from './candidate/profile/profile.component';
import { JobComponent as CompanyJob } from './company/job/job.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { LoginComponent as CandidateLogin} from './candidate/login/login.component';
import { LoginComponent} from './company/login/login.component';
import { RegisterComponent as CandidateRegister} from './candidate/register/register.component';
import { RegisterComponent as CompanyRegister} from './company/register/register.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"company/trial", component:TrialComponent},
    {path:"candidate/trial", component:TrialComponent},
    {path:"x/trial", component:TrialComponent},
    {path:"job", component:JobComponent},
    {path:"candidate", component:CandidateComponent},
    {path:"company", component:CompanyComponent},
    {path:'candidate/profile',component:CandidateProfile},
    {path:'company/profile',component:ProfileComponent},
    {path:'job/:id/details',component:JobdetailsComponent},
    {path:'candidate/login',component:CandidateLogin},
    {path:'candidate/register',component:CandidateRegister},
    {path:'company/login',component:LoginComponent},
    {path:'company/register',component:CompanyRegister},
    {path:'company/create',component:CompanyJob},
];
