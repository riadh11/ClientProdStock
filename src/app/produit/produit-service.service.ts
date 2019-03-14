import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL_API} from '../config/api.url.cong';
 import {Observable} from 'rxjs/Observable';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
 

  constructor( private http:HttpClient) { }
  getProduits(): Observable<any>{
    return this.http.get(URL_API.PRODUITS_url);
  }
   Addprod( p:Produit):Observable<any>{
     return this.http.post(URL_API.PRODUITS_url, p);
   }
   upDateprod( p:Produit):Observable<any>{
    return this.http.put(URL_API.PRODUITS_url, p);
  }
  DeleteProd(ref:String):Observable<any>{
    return this.http.delete(URL_API.PRODUITS_url+'/${ref}');
  }
}
