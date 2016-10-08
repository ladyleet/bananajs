import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { BananasComponent }  from './bananas/bananas.component';
import { RequestBananasComponent }  from './request-bananas/request-bananas.component';

const appRoutes: Routes = [
  { path: '', component: BananasComponent },
  { path: 'bananas', component: BananasComponent },
  { path: 'request-bananas', component: RequestBananasComponent },
  { path: 'about', component: AboutComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
