import { CountryList } from "../../types/country-list.type";
import { IBaseResponse } from "../base-response.interface";
import { ICountry } from "./country.interface";

export interface ICountryResponse extends IBaseResponse {
    data: CountryList;
}