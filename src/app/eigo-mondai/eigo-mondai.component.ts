import { Component, OnInit } from '@angular/core';
import { EigoMondai } from './eigo-mondai';
import { EigoMondaiService } from  './eigo-mondai.service';

@Component({
  selector: 'app-eigo-mondai',
  templateUrl: './eigo-mondai.component.html',
  styleUrls: ['./eigo-mondai.component.css']
})
export class EigoMondaiComponent implements OnInit {

  eigoMondaiSet: EigoMondai[];
  constructor(private eigoMondaiService: EigoMondaiService) { }

  ngOnInit() {
    this.eigoMondaiSet = this.eigoMondaiService.getEigoMondaiSet();
  }

}
