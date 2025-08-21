import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IState, IStateResponse } from "../interfaces/stateResponse.interface";
import { count, map, Observable } from "rxjs";
import { StateList } from "../types/state-list.type";

@Injectable({
    providedIn: 'root'
})

export class StateService {
    constructor(private readonly _http: HttpClient) { }
    private url: string = 'https://countriesnow.space/api/v0.1/countries/states';
    getStates(country: string): Observable<StateList> {
        return this._http.post<IStateResponse>(this.url, country).pipe(map((state) => state.data.states))
    }
}