import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { app_routing, appRoutingProviders } from "./app.routes";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import {SlideshowModule} from 'ng-simple-slideshow';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MarcaComponent } from './components/marca/marca.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from 'angular-modal-gallery';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    CotizacionComponent,
    DepartamentoComponent,
    RegistroComponent,
    MarcaComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    SlideshowModule,
    NgxCarouselModule,
    ScrollToModule.forRoot(),
    ModalGalleryModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
