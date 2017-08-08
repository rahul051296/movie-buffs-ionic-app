import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';
import { CelebdetailsPage } from '../celebdetails/celebdetails';

@Component({
  selector: 'page-tvdetails',
  templateUrl: 'tvdetails.html'
})
export class TvdetailsPage {
    tvdetails: string = "details";
    td: any;
    id:any;
    cast: any;
    gallery: any;
    galleryp: any;
    similar:any;
    year: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviebuffsService: MBService) {

        this.navCtrl = navCtrl;
        this.id = navParams.get('param1');
        this.getTvDetails(this.id);
        this.getTvCastDetails(this.id);
        this.getTvGallery(this.id);
        this.getTvSimilar(this.id);
  }
tvDetails(id){
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }
celebDetails(id){
    var cid = id;
          this.navCtrl.push(CelebdetailsPage,{
    param1: cid});
      }
getTvDetails(tid){
    this.moviebuffsService.getTvDetails(tid).subscribe(response => {
            this.td = response;
            var year = response.first_air_date;
            var substr=year.substr(0,4);
            this.year = '('+substr+')';
    });
}

getTvCastDetails(tid){
    this.moviebuffsService.getTvCastDetails(tid).subscribe(response => {
        this.cast = response.cast;
    });
}
getTvGallery(tid){
    this.moviebuffsService.getTvGallery(tid).subscribe(response => {
        this.gallery = response.backdrops;
        this.galleryp = response.posters;
    });
}
getTvSimilar(tid){
    this.moviebuffsService.getTvSimilar(tid).subscribe(response => {
        this.similar = response.results;
    });
}
    doRefresh(refresher) {
    setTimeout(() => {

       this.getTvDetails(this.id);
        this.getTvCastDetails(this.id);
        this.getTvGallery(this.id);
        this.getTvSimilar(this.id);

      refresher.complete();
    }, 3000);
  }
}
