import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CompetencesComponent } from './competences/competences.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: '', component: AccueilComponent},
  { path: 'competences', component: CompetencesComponent},
  { path: 'projets', component: ProjetsComponent},
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
