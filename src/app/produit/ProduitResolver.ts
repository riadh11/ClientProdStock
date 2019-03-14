import { Injectable } from "@angular/core";
import { ProduitServiceService } from "./produit-service.service";
import { Resolve } from "@angular/router";
@Injectable()
export class ProduitResolver implements Resolve<any>{

    constructor(private produitService:ProduitServiceService ){}

    resolve(){
        this.produitService.getProduits();
    }
}
