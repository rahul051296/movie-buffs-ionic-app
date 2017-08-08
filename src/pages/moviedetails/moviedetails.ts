import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';
import { CelebdetailsPage } from '../celebdetails/celebdetails';




@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html'
})
export class MoviedetailsPage {
    moviedetails: string = "details";
    id: any;
    md: any;
    cast: any;
    gallery: any;
    galleryp: any;
    similar: any;
    year: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController, private moviebuffsService: MBService) {
        this.navCtrl = navCtrl;
        this.id = navParams.get('param1');
        this.getMovieDetails(this.id);
        this.getMovieGallery(this.id);
        this.getMovieCastDetails(this.id)
        this.getMovieSimilar(this.id)
  }
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviedetailsPage,{
    param1: mid});
      }
celebDetails(id){
    var cid = id;
          this.navCtrl.push(CelebdetailsPage,{
    param1: cid});
      }
  getMovieDetails(mid){
    this.moviebuffsService.getMovieDetails(mid).subscribe(response => {
            this.md = response;
            var year = response.release_date;
            var substr=year.substr(0,4);
            this.year = '('+substr+')';
    });
}
getMovieCastDetails(mid){
    this.moviebuffsService.getMovieCastDetails(mid).subscribe(response => {
        this.cast = response.cast;
        console.log(this.cast);
    });
}
getMovieGallery(mid){
    this.moviebuffsService.getMovieGallery(mid).subscribe(response => {
        this.gallery = response.backdrops;
        this.galleryp = response.posters;
    });
}
getMovieSimilar(mid){
    this.moviebuffsService.getMovieSimilar(mid).subscribe(response => {

        this.similar = response.results;
    });
}

movDetails(id){
    this.moviebuffsService.getMovieDetails(id).subscribe(response => {
            this.md = response;
    });
}
   doRefresh(refresher) {
    setTimeout(() => {

        this.getMovieDetails(this.id);
        this.getMovieCastDetails(this.id);
        this.getMovieGallery(this.id);
        this.getMovieSimilar(this.id);

      refresher.complete();
    }, 3000);
  }

}
