import { Injectable } from '@angular/core';
import { SAMPLE_MONDAI_SET } from './mock-eigo-mondai-set';
import { EigoMondai } from './eigo-mondai';

@Injectable()
export class EigoMondaiService {

  constructor() { }

  getEigoMondaiSet(): EigoMondai[] {
    return SAMPLE_MONDAI_SET;
  }

}
