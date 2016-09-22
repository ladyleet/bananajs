import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { BananasComponent }  from './bananas/bananas.component';
import { GetBananasComponent }  from './get-bananas/get-bananas.component';

const appRoutes: Routes = [
  { path: '', component: BananasComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bananas', component: BananasComponent },
  { path: 'get-bananas', component: GetBananasComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
