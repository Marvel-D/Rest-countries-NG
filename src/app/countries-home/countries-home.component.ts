import { Component, OnInit } from '@angular/core';
import { IRESTCountries } from '../../assets/restcountries';
import { IRegion } from 'src/assets/region';
import { RestCountriesService } from '../rest-countries.service';

@Component({
  selector: 'app-countries-home',
  templateUrl: './countries-home.component.html',
  styleUrls: ['./countries-home.component.css'],
})
export class CountriesHomeComponent implements OnInit {
  countries: IRESTCountries[] = [];

  // region: IRegion[] = [];

  constructor(private countryService: RestCountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService
      .getAllCountries()
      .subscribe((country) => (this.countries = country));
  }

  // getCountriesByRegion() {
  //   this.countryService
  //     .getCountriesByRegion()
  //     .subscribe((region) => (this.region = region));
  //   // this.countries = this.countryService.getCountriesByRegion(e)
  // }
}
