export interface IState {
    name: string;
    state_code: string;
}

export interface Data {
    name: string;
    iso3: string;
    states: IState[];
}

export interface IStateResponse {
    error: boolean;
    msg: string;
    data: Data;
}