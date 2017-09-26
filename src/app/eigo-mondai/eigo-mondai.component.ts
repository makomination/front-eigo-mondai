import { Component, OnInit } from '@angular/core';
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
  
  constructor(private eigoMondaiService: EigoMondaiService) { }

  ngOnInit() {
    this.eigoMondaiSet = this.eigoMondaiService.getEigoMondaiSetOnPage(1, EigoMondaiComponent.NUM_OF_MONDAI_PER_PAGE);
    //this.eigoMondaiSet = this.eigoMondaiService.getEigoMondaiSet();
  }

}
