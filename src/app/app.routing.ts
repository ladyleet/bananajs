import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { BananasComponent }  from './bananas/bananas.component';
import { RequestBananasComponent }  from './request-bananas/request-bananas.component';

const appRoutes: Routes = [
  { path: '', component: BananasComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bananas', component: BananasComponent },
  { path: 'request-bananas', component: RequestBananasComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
