import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent  {

  opportunities: any[];

  constructor(private getDataService: GetDataService) {

    this.getDataService.getOpportunities().subscribe( res => {

      this.opportunities = res['opportunities'];
    });
   }


}
