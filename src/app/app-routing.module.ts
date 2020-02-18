import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';


const routes: Routes = [
  { path : '', redirectTo : 'chaussures',pathMatch : 'full' },
  { path: 'chaussures', component: ChaussureComponent},
  { path: 'chaussures/:id', component: ChaussureDetailComponent},
  { path: 'chaussure/edit/:id', component: EditChaussureComponent },
  { path: 'chaussure/ajout', component: AddChaussureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
