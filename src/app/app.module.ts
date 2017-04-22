import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TvPage } from '../pages/tv/tv';
import { CelebsPage } from '../pages/celebs/celebs';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MoviedetailsPage} from '../pages/moviedetails/moviedetails';
import {TvdetailsPage} from '../pages/tvdetails/tvdetails';
import {CelebdetailsPage} from '../pages/celebdetails/celebdetails';
import {SearchPage} from '../pages/search/search';
import {SearchTvPage} from '../pages/search-tv/search-tv';
import {SearchCelebPage} from '../pages/search-celeb/search-celeb';



@NgModule({
  declarations: [
    MyApp,
    TvPage,
    CelebsPage,
    HomePage,
    TabsPage,
    MoviedetailsPage,
    TvdetailsPage,
    CelebdetailsPage,
    SearchPage ,
    SearchTvPage,
    SearchCelebPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TvPage,
    CelebsPage,
    HomePage,
    TabsPage,
    MoviedetailsPage,
    TvdetailsPage,
    CelebdetailsPage,
    SearchPage ,
    SearchTvPage,
    SearchCelebPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
