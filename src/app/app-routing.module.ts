import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminComponent } from './superadmin/superadmin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CoursComponent } from './cours/cours.component';
import { ParentsComponent } from './parents/parents.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'superadmin', component: SuperadminComponent },
  { path: 'apprenant', component: ApprenantComponent },
  { path: 'enseignant', component: EnseignantComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'parents', component: ParentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
