import { ICandidate } from './../interfaces/interfaces';
import { CandidateService } from './../candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: ICandidate[] = [];
  editId: number = 0;
  errorMessage: string;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() { 
    this.candidateService.getCandidates()
        .subscribe((data: ICandidate[]) => this.candidates = data);
  }

  save(candidate: ICandidate) {
    this.candidateService.updateCandidate(candidate)
        .subscribe((status: boolean) => {
            if (status) {
                this.editId = 0;
            } else {
                this.errorMessage = 'Unable to save candidate';
            }
        })
}

}
