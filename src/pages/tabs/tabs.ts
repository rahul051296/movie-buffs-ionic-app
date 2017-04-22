import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TvPage } from '../tv/tv';
import { CelebsPage } from '../celebs/celebs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TvPage;
  tab3Root: any = CelebsPage;

  constructor() {

  }
}
