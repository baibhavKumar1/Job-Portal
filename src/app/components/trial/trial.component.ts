import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter,OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrialService } from '../../services/trial.service';

@Component({
  selector: 'app-trial',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './trial.component.html',
  styleUrl: './trial.component.css'
})
export class TrialComponent implements OnInit {
  profile: any
  @Output() addItemEvent = new EventEmitter<any>()
  constructor(private route: ActivatedRoute,public trial:TrialService) { }
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.profile = segments.some(segment => segment.path === 'company') ? 'company' : segments.some(segment => segment.path === 'candidate')? 'candidate':'data';
    });
  }
  // sendData(data:any) {
  //   this.trial.updateData(data)
  // }
}
