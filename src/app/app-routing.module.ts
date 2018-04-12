import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent }      from './grid/grid.component';
import { GridElementComponent }      from './grid-element/grid-element.component';

import { SiteLayoutComponent }      from './_layout/site-layout/site-layout.component';
import { SidebarComponent }      from './_layout/sidebar/sidebar.component';
import {HeaderComponent} from './_layout/header/header.component';
import { AdvancePluginsComponent } from './advance-plugins/advance-plugins.component';
const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'gridElement', component: GridElementComponent},
  //Site routes goes here 
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: 'advanceplugings', component: AdvancePluginsComponent},
      /*{ path: 'about', component: AboutComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'informations', component: InformationsComponent },
      { path: 'login', component: LoginComponent }*/
    ]
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
