import { Routes } from '@angular/router';

import { PagesComponent } from '../../pages/pages.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AuthGuard } from '../service/auth-guard.service';

export const ROUTES: Routes = [
  { path: '', component: PagesComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
