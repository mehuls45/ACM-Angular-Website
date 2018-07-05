import { GetDataService } from './services/get-data.service';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CesaTeamComponent } from './cesa-team/cesa-team.component';
import { CellsComponent } from './cells/cells.component';
import { StudentsAchievementsComponent } from './students-achievements/students-achievements.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { AboutAcmComponent } from './about-acm/about-acm.component';
import { AboutPccoeAcmComponent } from './about-pccoe-acm/about-pccoe-acm.component';
import { AcmSpeakersComponent } from './acm-speakers/acm-speakers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    CesaTeamComponent,
    CellsComponent,
    StudentsAchievementsComponent,
    OpportunitiesComponent,
    AboutAcmComponent,
    AboutPccoeAcmComponent,
    AcmSpeakersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-acm',
        component: AboutAcmComponent
      },
      {
        path: 'about-pccoe-acm',
        component: AboutPccoeAcmComponent
      },
      {
        path: 'acm-speakers',
        component: AcmSpeakersComponent
      }
    ], { useHash: true })
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
