import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { SAMPLE_MONDAI_SET } from './mock-eigo-mondai-set';
import { EigoMondai } from './eigo-mondai';
import { Observable } from  'rxjs';

@Injectable()
export class EigoMondaiService {

  constructor(private http: Http) { }
  getEigoMondaiSet(): EigoMondai[] {
    return SAMPLE_MONDAI_SET;
  }

  getMondaiSetInfo(): Observable<any> {
    return this.http.get('http://localhost:8000/api/eigo-mondai-info').map(response => response.json() as any);
  }

  getEigoMondaiSetOnPage(pageNo: number): Observable<EigoMondai[]>{
    return this.http.get(`http://localhost:8000/api/eigo-mondai/${pageNo}`).map(response => response.json() as EigoMondai[]);
  }
  
}
