import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { GetBananasComponent }  from './get-bananas/get-bananas.component';
import { BananasComponent }  from './bananas/bananas.component';

const appRoutes: Routes = [
  { path: '', component: BananasComponent },
  { path: 'bananas', component: BananasComponent },
  { path: 'get-bananas', component: GetBananasComponent },
  { path: 'about', component: AboutComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
