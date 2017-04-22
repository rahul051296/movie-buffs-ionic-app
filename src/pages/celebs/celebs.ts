import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {MBService} from '../../app/services/moviebuffs.service';

import { CelebdetailsPage } from '../celebdetails/celebdetails';

import { SearchCelebPage } from '../search-celeb/search-celeb';

@Component({
  selector: 'page-celebs',
  templateUrl: 'celebs.html'
})
export class CelebsPage {
    celebs: string = "popular-celebs";
    pcs: any;
  constructor(public navCtrl: NavController, private moviebuffsService: MBService) {

  }
ngOnInit(){
    this.getPopularCelebs();

}
search()
{
    this.navCtrl.push(SearchCelebPage);
}
celebDetails(id){ 
    var cid = id;
          this.navCtrl.push(CelebdetailsPage,{
    param1: cid});
      }
getPopularCelebs(){
    this.moviebuffsService.getPopularCelebs().subscribe(response => {
        this.pcs = response.results;
        console.log(this.pcs);

    });
}
    doRefresh(refresher) {
    setTimeout(() => {

     this.getPopularCelebs();

      refresher.complete();
    }, 2000);
  }
}
