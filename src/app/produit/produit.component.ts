import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitServiceService } from './produit-service.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] ;
  produitForm:FormGroup;
  operation : string = 'add';
  selectedProd: Produit;
  constructor(private Produitservice: ProduitServiceService, private fb: FormBuilder) { 
     this.creatForm();
   }

  ngOnInit() {
    //this.produits= this.Produitservice.getProduits()
    this.loadProd();
    this.initProduit();
    
 }
 creatForm(){
  this.produitForm = this.fb.group({
    ref:['', Validators.required],
    quatite:'',
    prixunitaire:''
  })
 }

 loadProd(){
   this.Produitservice.getProduits()
    .subscribe(data=>{this.produits=data},
      (error)=>{console.log('error')},
      ()=>{console.log('loading product')},
     
    );}
    Addprod(){
      const p =this.produitForm.value;
      this.Produitservice.Addprod(p).subscribe(
        resp => { 
                    this.initProduit();
                    this.loadProd();
                }
  );
 }
 upDateprod(){
      this.Produitservice.upDateprod(this.selectedProd)
      .subscribe(
        resp=>{  this.initProduit();
                 this.loadProd();
              }
        
   );
 }

// Addprod(prod:Produit){}

initProduit(){
  this.selectedProd = new Produit();   
  this.creatForm();
}

}
 