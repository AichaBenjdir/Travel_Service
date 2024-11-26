import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'voyages', pathMatch: 'full' }, // Redirection vers la page par défaut
  { path: 'voyages', component: VoyagesComponent }, // Page Voyages
  { path: 'reservation', component: ReservationComponent }, // Page Réservation

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
