import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabVarComponent } from './components/nab-var/nab-var.component';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';
import { TatianaComponent } from './screens/tatiana/tatiana.component';


import { MartinComponent } from './screens/martin/martin.component';

import { DiegoComponent } from './screens/diego/diego.component';


import { ProfeComponent } from './screens/profe/profe.component';


@NgModule({
  declarations: [
    AppComponent,
    NabVarComponent,
    HomeComponent,
    InfoComponent,

    TatianaComponent



    MartinComponent

    DiegoComponent


    ProfeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
