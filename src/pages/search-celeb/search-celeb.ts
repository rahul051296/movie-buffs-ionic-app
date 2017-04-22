import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MBService} from '../../app/services/moviebuffs.service';
import { CelebdetailsPage } from '../celebdetails/celebdetails';

/*
  Generated class for the SearchCeleb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-celeb',
  templateUrl: 'search-celeb.html'
})
export class SearchCelebPage {
     sch: any;
    id:any;
    key:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviebuffsService: MBService) {}
celebDetails(id){ 
    var cid = id;
          this.navCtrl.push(CelebdetailsPage,{
    param1: cid});
      }
      searchDB(event, key)
    {
        this.moviebuffsService.getSearchCeleb(key).subscribe(response => {
        this.sch = response.results;
            console.log(response);
    });
    }
}
