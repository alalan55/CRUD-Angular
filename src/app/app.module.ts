import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components-module.module';
import { HomeModule } from './components/paginaHome/paginaHome.module';
// import { ComponentsRoutingModule } from './components/components.-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    HomeModule,
    // ComponentsRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
