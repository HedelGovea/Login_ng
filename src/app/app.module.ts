import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { BarraComponent } from './barra/barra.component';
import { RojoComponent } from './rojo/rojo.component';
import { HeaderFrpComponent } from './header-frp/header-frp.component';
import { HomeFrpComponent } from './home-frp/home-frp.component';
import { IconsFrpComponent } from './icons-frp/icons-frp.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    BarraComponent,
    RojoComponent,
    HeaderFrpComponent,
    HomeFrpComponent,
    IconsFrpComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
