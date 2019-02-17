import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const appRoutes: Routes = [
    {path:'produit', component:ProduitComponent},
    {path:'', redirectTo:'dashboard', pathMatch:'full' } ,
    {path:'dashboard', component:DashboardComponent} ,

];

@NgModule({
 imports:[
     RouterModule.forRoot(
        appRoutes,
        {enableTracing: false}
     )
 ],
 exports :[RouterModule]

})
export class AppRoutingModule{}
