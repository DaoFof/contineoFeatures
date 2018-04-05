import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GridComponent } from './grid/grid.component';
import { GridElementComponent } from './grid-element/grid-element.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridElementComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
