import { Inject, Injectable } from '@angular/core';
import { IRESTCountries, countries } from '../assets/restcountries';
import { IRegion, Name } from 'src/assets/region';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://restcountries.com/v3.1/';

  getAllCountries(): Observable<IRESTCountries[]> {
    return this.http.get<IRESTCountries[]>(this.baseUrl + 'all');
  }

  // getCountry(name: string): Observable<IRESTCountries[]> {
  //   return this.http.get<IRESTCountries[]>(`${this.baseUrl}/name/${name}`);
  // }

  getCountry(name: string): Observable<IRegion[]> {
    return this.http.get<IRegion[]>(`${this.baseUrl}/name/${name}`);
  }
}
