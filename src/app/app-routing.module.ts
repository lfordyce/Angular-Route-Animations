import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipComponent } from './ship/ship.component';
import { ShipEditComponent } from './ship-edit/ship-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {state: 'home' } },
  {
    path: 'ship', component: ShipComponent, data: { state: 'ship'},
    children: [
      { path: 'edit', component: ShipEditComponent }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
