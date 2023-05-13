import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FarmersCollectionComponent } from './farmers-collection/farmers-collection.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  // { path: '', component: FarmersCollectionComponent },
  { path: 'farmers-collection', component: FarmersCollectionComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
