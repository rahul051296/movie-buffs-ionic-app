import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';
import {TvdetailsPage} from '../tvdetails/tvdetails';

/*
  Generated class for the SearchTv page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-tv',
  templateUrl: 'search-tv.html'
})
export class SearchTvPage {
    sch: any;
    id:any;
    key:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviebuffsService: MBService) {}
  tvDetails(id){ 
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }
      searchDB(event, key)
    {
        this.moviebuffsService.getSearchTv(key).subscribe(response => {
        this.sch = response.results;
            console.log(response);
    });
    }

}
