import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';  //<<<< import it here

import { DataTablesModule } from 'angular-datatables';
import { BootstrapModule } from './bootstrap-module/bootstrap-module.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GridComponent } from './grid/grid.component';
import { GridElementComponent } from './grid-element/grid-element.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { HeaderComponent } from './_layout/header/header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AdvancePluginsComponent } from './advance-plugins/advance-plugins.component';
import { MultiselectComponent } from './views/multiselect/multiselect.component';
import { KnobComponent } from './views/knob/knob.component';
import { DatepickerComponent } from './views/datepicker/datepicker.component';
import { DatePickerRangeComponent } from './views/datePicker/date-picker-range/date-picker-range.component';
import { DatePickerPopUpComponent } from './views/datePicker/date-picker-pop-up/date-picker-pop-up.component';
import { TimepickerComponent } from './views/timepicker/timepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridElementComponent,
    SidebarComponent,
    HeaderComponent,
    SiteLayoutComponent,
    AdvancePluginsComponent,
    MultiselectComponent,
    KnobComponent,
    DatepickerComponent,
    DatePickerRangeComponent,
    DatePickerPopUpComponent,
    TimepickerComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    BootstrapModule,
    NgMultiSelectDropDownModule.forRoot() ,
    FormsModule,
    ReactiveFormsModule ,
    NgbModule.forRoot(),
    AmazingTimePickerModule // this line you need
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
