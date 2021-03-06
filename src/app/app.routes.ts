import { ModuleWithProviders } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  CotizacionComponent,
  ContactoComponent,
  NosotrosComponent,
  DepartamentoComponent,
  RegistroComponent,
  ProyectoComponent,
  MarcaComponent,
} from "./components/index.page";

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cotizacion/:tipo', component: CotizacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'elige-departamento', component: RegistroComponent },
  { path: 'departamento/:tipo', component: DepartamentoComponent },
  { path: 'proyecto-da-vinci', component: ProyectoComponent },
  { path: 'empresas-amigas', component: MarcaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
