import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { MatButtonModule } from '@angular/material/button';
CandidateService
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // candidate:any
  // constructor(private candidateService: CandidateService) {}

  // onFileChange(event: any): void {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     this.candidate.resume = files[0];
  //   }
  // }

  // onSubmit(): void {
  //   this.candidateService.uploadResume(this.candidate).subscribe(
  //     (response) => {
  //       console.log('Resume uploaded successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error uploading resume:', error);
  //     }
  //   );
  // }
}
