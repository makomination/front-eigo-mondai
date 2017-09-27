import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap , Params, Router} from '@angular/router';
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

  numOfMondaiPerPage = 3;
  eigoMondaiSet: EigoMondai[];
  pageNo: number;
  numOfMondaiSet: number;
  
  constructor(private eigoMondaiService: EigoMondaiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageNo = params['pageNo'] as number;
      this.eigoMondaiSet = this.eigoMondaiService.getEigoMondaiSetOnPage(this.pageNo, this.numOfMondaiPerPage)
    });
    this.numOfMondaiSet = this.eigoMondaiService.getNumOfMondaiSet();
  }
  goBack() {
    let link = ['/eigo-mondai', +this.pageNo - 1];
    this.router.navigate(link);
  }
  goNext() {
    let link = ['/eigo-mondai', +this.pageNo + 1];
    this.router.navigate(link);
  }

}
