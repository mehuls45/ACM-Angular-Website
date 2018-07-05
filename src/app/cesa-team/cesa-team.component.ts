import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cesa-team',
  templateUrl: './cesa-team.component.html',
  styleUrls: ['./cesa-team.component.css']
})
export class CesaTeamComponent {

  core: any[];
  cells: any[];

  constructor(private getDataService: GetDataService) {

    this.getDataService.getTeam().subscribe( res => {

      this.core = res["core"];
      this.cells = res["cells"];
    });
   }

}
