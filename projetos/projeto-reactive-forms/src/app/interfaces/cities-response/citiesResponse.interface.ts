import { CitiesList } from "../../types/cities-list.type";
import { IBaseResponse } from "../base-response.interface";

export interface ICitiesResponse extends IBaseResponse {
    data: CitiesList;
}