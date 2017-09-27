import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap , Params} from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { EigoMondai } from '../eigo-mondai';
import { EigoMondaiService } from  '../eigo-mondai.service';

@Component({
  selector: 'app-eigo-mondai',
  templateUrl: './eigo-mondai.component.html',
  styleUrls: ['./eigo-mondai.component.css']
})
export class EigoMondaiComponent implements OnInit {

  static NUM_OF_MONDAI_PER_PAGE = 3;
  eigoMondaiSet: EigoMondai[];
  pageNo: number;
  
  constructor(private eigoMondaiService: EigoMondaiService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageNo = params['pageNo'] as number;
      this.eigoMondaiSet = this.eigoMondaiService.getEigoMondaiSetOnPage(this.pageNo, EigoMondaiComponent.NUM_OF_MONDAI_PER_PAGE)
    });
  }

}
