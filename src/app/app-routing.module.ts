import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { CoursComponent } from './cours/cours.component';
import { ErrorComponent } from './error/error.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path:'',redirectTo:'/acc',pathMatch:'full'},
  {path:'acc', component:AccueilComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'ajouterProduit', component:AddProductComponent},
  {path:'modifierProduit/:id', component:ModifyProductComponent},
  {path:'contact', component:ContactComponent},
  {path:'form', component:FormulaireComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
