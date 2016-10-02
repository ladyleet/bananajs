import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about/about.component';
import { BananasComponent }  from './bananas/bananas.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'bananas', component: BananasComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
