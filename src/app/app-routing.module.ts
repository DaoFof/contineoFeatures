import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent }      from './grid/grid.component';
import { GridElementComponent }      from './grid-element/grid-element.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'gridElement', component: GridElementComponent}
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
