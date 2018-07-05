import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students-achievements',
  templateUrl: './students-achievements.component.html',
  styleUrls: ['./students-achievements.component.css']
})
export class StudentsAchievementsComponent  {

  achievements : any[];

  constructor(private getDataService: GetDataService) {

    this.getDataService.getAchievements().subscribe( res => { 

      this.achievements = res['achievements'];
    
     });
   }

}
