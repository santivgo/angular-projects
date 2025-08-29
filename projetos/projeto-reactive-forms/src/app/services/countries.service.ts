import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountryResponse } from '../interfaces/country-response/countriesResponse.interface';
import { CountryList } from '../types/country-list.type';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private readonly _http: HttpClient) { }
  private url: string = "https://countriesnow.space/api/v0.1/countries/"

  getCountries(): Observable<CountryList> {
    return this._http.get<ICountryResponse>(this.url).pipe(map((countryResponse) => countryResponse.data))
  }
}
