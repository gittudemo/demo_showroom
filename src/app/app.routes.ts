import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'address', component: AddressComponent },
  { path: 'contact', component: ContactComponent },
];
