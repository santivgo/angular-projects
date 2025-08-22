import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICountryResponse } from "../interfaces/country-response/countriesResponse.interface";
import { map, Observable } from "rxjs";
import { ICitiesResponse } from "../interfaces/cities-response/citiesResponse.interface";
import { CitiesList } from "../types/cities-list.type";

@Injectable({
    providedIn: 'root'
})
export class CityService {
    constructor(private readonly _http: HttpClient) { }
    private url: string = 'https://countriesnow.space/api/v0.1/countries/state/cities';
    getCities(country: string, state: string): Observable<CitiesList> {
        return this._http.post<ICitiesResponse>(this.url, { country, state }).pipe(map((cityObj) => cityObj.data))
    }

}