import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'accueil', component:  AccueilComponent  }, 
  { path: 'voyages', component: VoyagesComponent }, 
  { path: 'reservation', component: ReservationComponent }, 
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
