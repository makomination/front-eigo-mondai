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

  numOfMondaiPerPage: number;
  numOfMondaiSet: number;
  eigoMondaiSet: EigoMondai[];
  pageNo: number;
  
  constructor(private eigoMondaiService: EigoMondaiService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageNo = params['pageNo'] as number;
      this.eigoMondaiService.getEigoMondaiSetOnPage(this.pageNo).subscribe(eigoMondaiSet => this.eigoMondaiSet = eigoMondaiSet);
    });
    this.eigoMondaiService.getMondaiSetInfo().subscribe(info => {this.numOfMondaiPerPage = info.numOfMondaiPerPage;this.numOfMondaiSet = info.numOfMondaiSet;});
    
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
