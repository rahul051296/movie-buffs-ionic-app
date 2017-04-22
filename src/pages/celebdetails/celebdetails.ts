import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';

import { MoviedetailsPage } from '../moviedetails/moviedetails';
import { TvdetailsPage } from '../tvdetails/tvdetails';


@Component({
  selector: 'page-celebdetails',
  templateUrl: 'celebdetails.html'
})
export class CelebdetailsPage {
    celebdetails: string = "details";
    id:any;
    gallery: any;
    cmd:any;
    ctd:any
    cd:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviebuffsService: MBService) {
      
      this.id = navParams.get('param1');
      this.getCelebDetails(this.id);
      this.getCelebGallery(this.id);
      this.getCelebMovieDetails(this.id);
      this.getCelebTvDetails(this.id);
  }
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviedetailsPage,{
    param1: mid});
      }
tvDetails(id){ 
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }
  getCelebDetails(cid){
    this.moviebuffsService.getCelebDetails(cid).subscribe(response => {
            this.cd = response;
        console.log(response)
    });
} 
    getCelebGallery(cid){
    this.moviebuffsService.getCelebGallery(cid).subscribe(response => {
            this.gallery = response.profiles;
    });
} 
getCelebMovieDetails(cid){
    this.moviebuffsService.getCelebMovieDetails(cid).subscribe(response => {
            this.cmd = response.cast;
            console.log(this.cmd);
    });
} 
getCelebTvDetails(cid){
    this.moviebuffsService.getCelebTvDetails(cid).subscribe(response => {
            this.ctd = response.cast;
            
            
    });
} 
    doRefresh(refresher) {
    setTimeout(() => {
        
       this.getCelebDetails(this.id);
      this.getCelebGallery(this.id);
      this.getCelebMovieDetails(this.id);
      this.getCelebTvDetails(this.id);

      refresher.complete();
    }, 3000);
  }
}
