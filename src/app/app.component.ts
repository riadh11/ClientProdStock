import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// app gestion de stock des produits riadh
export class AppComponent implements OnInit {
  showHideSidebar: boolean= false;
  constructor(private appService:AppService,
              private router: Router){

  }
  hidsidebar(showHideSidebar){
    this.showHideSidebar=showHideSidebar;
  }
  ngOnInit(){
   if(!this.appService.authenticated){
    this.router.navigateByUrl('/login');}
    else
    { this.router.navigateByUrl('/home');}
  }
 
}
