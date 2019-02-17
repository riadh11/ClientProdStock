import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// app gestion de stock des produits riadh
export class AppComponent {
  showHideSidebar: boolean= false;
  hidsidebar(showHideSidebar){
    this.showHideSidebar=showHideSidebar;

  }
}
