import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  induct: any[];
  esp: any[];
  pcl: any[];
  teachers_day: any[];
  anantya: any[];
  msp: any[];
  hofc: any[];
  acs: any[];


  constructor(private getDataService: GetDataService) { 

    this.getDataService.getGallery().subscribe( res => {

      this.induct = res['induction'];
      this.esp = res['esp'];
      this.pcl = res['pcl'];
      this.teachers_day = res['teachers-day'];
      this.anantya = res['anantya'];
      this.msp = res['msp'];
      this.hofc = res['hofc'];
      this.acs = res['acs'];

    });
  }

}
