import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FarmersCollectionComponent } from './farmers-collection/farmers-collection.component';
import { ChartComponent } from './chart/chart.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FarmersCollectionComponent,
    ChartComponent,
    IntroComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
