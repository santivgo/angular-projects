export interface ICountry {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
}

export interface ICountryResponse {
    error: boolean;
    msg: string;
    data: ICountry[];
}