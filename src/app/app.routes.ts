import { ModuleWithProviders } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent
} from "./components/index.page";

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
