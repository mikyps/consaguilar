import { ModuleWithProviders } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  CotizacionComponent,
  ContactoComponent,
  NosotrosComponent,
  DepartamentoComponent
} from "./components/index.page";

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'departamento/:tipo', component: DepartamentoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
