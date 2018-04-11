import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ICandidate } from './interfaces/interfaces';

@Injectable()
export class CandidateService {

  private url: string = 'api/';
    
    constructor(private http: Http) { }
    
    getCandidates() : Observable<ICandidate[]> {
        return this.http.get(this.url + 'candidates')
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }
    
    updateCandidate(candidate: ICandidate) {       
      return this.http.put(this.url + 'putCandidate/' + candidate.id, candidate)
                 .map((response: Response) => response.json())
                 .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
