import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acm-speakers',
  templateUrl: './acm-speakers.component.html',
  styleUrls: ['./acm-speakers.component.css']
})
export class AcmSpeakersComponent {

  distinguished: any[];
  eminent: any[];

  constructor(private getDataService: GetDataService) {

    this.getDataService.getSpeakers().subscribe( res => {
      
      this.distinguished = res['distinguished'];
      this.eminent = res['eminent'];
    });

  }

}
