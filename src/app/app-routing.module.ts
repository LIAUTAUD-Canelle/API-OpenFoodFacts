import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllergenComponent } from './allergen/allergen.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path : '', component : BodyComponent},
  { path : 'Allergen', component : AllergenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
