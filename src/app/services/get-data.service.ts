import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetDataService {

  url = '../../assets/data/';

  constructor(private http: Http) { }

  getGallery() {
    return this.http.get(this.url + 'gallery.json').map( res => res.json());
  }

  getTeam() {
    return this.http.get(this.url + 'cesa-team.json').map( res => res.json());
  }

  getCells() {
    return this.http.get(this.url + 'cells.json').map( res => res.json());
  }

  getAchievements() {
    return this.http.get(this.url + 'achievements.json').map( res => res.json());
  }

  getOpportunities() {
    return this.http.get(this.url + 'opportunities.json').map( res => res.json());
  }

  getSpeakers() {
    return this.http.get(this.url + 'acm-speakers.json').map( res => res.json());
  }

}
