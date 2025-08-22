import { IBaseResponse } from "../base-response.interface";
import { IState } from "./state.interface";

interface IStateData {
    name: string;
    iso3: string;
    states: IState[];
}

export interface IStateResponse extends IBaseResponse {
    data: IStateData;
}