import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesHomeComponent } from './countries-home/countries-home.component';

import { HttpClientModule } from '@angular/common/http';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [AppComponent, CountriesHomeComponent, CountryDetailComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
