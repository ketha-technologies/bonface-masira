import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmersCollectionComponent } from './farmers-collection/farmers-collection.component';
import { ChartComponent } from './chart/chart.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'collections', component: FarmersCollectionComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
