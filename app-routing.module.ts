import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { from } from 'rxjs';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'sports', component: SportsComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
