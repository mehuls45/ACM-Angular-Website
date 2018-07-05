import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent {

  cells : any[];

  constructor(private getDataService: GetDataService) {

    this.getDataService.getCells().subscribe( res => {
      
      this.cells = res['cells'];

    });
   }

}
