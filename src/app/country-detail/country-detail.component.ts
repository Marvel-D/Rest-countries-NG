import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IRegion } from 'src/assets/region';
import { IRESTCountries, countries } from 'src/assets/restcountries';
import { RestCountriesService } from '../rest-countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country!: IRegion[] | null;

  constructor(
    private route: ActivatedRoute,
    private countryService: RestCountriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.getCountry(id);
    });
  }
  getCountry(name: string) {
    this.countryService.getCountry(name).subscribe((countryInfo) => {
      this.country = countryInfo;
      console.log('country', this.country);
    });
  }

  // getCountry() {
  //   const id = String(this.route.snapshot.params['name'];
  //   this.countryService
  //     .getCountry(id)
  //     .subscribe((country) => (this.country$ = country));

  //   console.log(this.country);
  // }
}
