import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    sch: any;
    id:any;
    key:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private moviebuffsService: MBService) {
      
  }
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviedetailsPage,{
    param1: mid});
      }
  searchDB(event, key)
    {
        this.moviebuffsService.getSearch(key).subscribe(response => {
        this.sch = response.results;
            console.log(this.sch);
    });
    }

}
