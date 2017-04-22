import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {MBService} from '../../app/services/moviebuffs.service';

import { MoviedetailsPage } from '../moviedetails/moviedetails';

import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    movies: string = "now-playing";
    nps: any;
    cms: any;
  constructor(public navCtrl: NavController, private moviebuffsService: MBService) {
    
  }
ngOnInit(){
    this.getNowplaying();
    this.getComingsoon();
}
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviedetailsPage,{
    param1: mid});
      }
     
search()
{
    this.navCtrl.push(SearchPage);
}
getNowplaying(){
    this.moviebuffsService.getNowplaying().subscribe(response => {
        this.nps = response.results;
    });
}
getComingsoon(){
    this.moviebuffsService.getComingsoon().subscribe(response => {
        this.cms = response.results;
    });
}
    doRefresh(refresher) {
    setTimeout(() => {
    this.getNowplaying();
    this.getComingsoon();
      refresher.complete();
    }, 3000);
  }

}
