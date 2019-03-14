import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated :boolean = false;
  constructor() { }
  authentication(credentials, callback){
    if(credentials && credentials.username =='Riad' && credentials.password =='elkamel'){
       this.authenticated = true;
       return callback && callback();
    }
    else
    { this.authenticated = false;}
    return '';
  }
}
