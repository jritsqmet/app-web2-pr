import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabVarComponent } from './components/nab-var/nab-var.component';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';
import { TatianaComponent } from './screens/tatiana/tatiana.component';

@NgModule({
  declarations: [
    AppComponent,
    NabVarComponent,
    HomeComponent,
    InfoComponent,
    TatianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
