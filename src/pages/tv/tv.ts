import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {MBService} from '../../app/services/moviebuffs.service';

import { TvdetailsPage } from '../tvdetails/tvdetails';

import { SearchTvPage } from '../search-tv/search-tv';


@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html'
})
export class TvPage {
     tv: string = "airing-today";
    ats: any;
    pss: any;
    trs: any;
  constructor(public navCtrl: NavController,private moviebuffsService: MBService) {

  }
ngOnInit(){
    this.getAiringToday();
    this.getPopularShows();
    this.getTopRatedShows();
}

search()
{
    this.navCtrl.push(SearchTvPage);
}
 tvDetails(id){ 
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }
 getAiringToday(){
    this.moviebuffsService.getAiringToday().subscribe(response => {
        this.ats = response.results;
    });
}
 getPopularShows(){
    this.moviebuffsService.getPopularShows().subscribe(response => {
        this.pss = response.results;
    });
}
 getTopRatedShows(){
    this.moviebuffsService.getTopRatedShows().subscribe(response => {
        this.trs = response.results;
    });
}
    
    doRefresh(refresher) {
    setTimeout(() => {
    this.getAiringToday();
    this.getPopularShows();
    this.getTopRatedShows();
      refresher.complete();
    }, 2000);
  }
 
}
