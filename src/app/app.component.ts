import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// app gestion de stock des produits
export class AppComponent {
  showHideSidebar: boolean= false;
  hidsidebar(showHideSidebar){
    this.showHideSidebar=showHideSidebar;

  }
}
