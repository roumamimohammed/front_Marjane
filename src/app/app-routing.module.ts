import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import {PromotionComponent} from "./promotion/promotion.component";

const routes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path :'promotion', component:PromotionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

