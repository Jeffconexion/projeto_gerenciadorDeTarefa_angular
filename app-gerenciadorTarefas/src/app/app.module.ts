import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleRoutes } from './app-module.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
