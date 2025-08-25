import { AddressList } from "./address.interface";
import { DependentsList } from "./dependents.interface";
import { PhoneList } from "./phone.interface";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: PhoneList[];
    addressList: AddressList[];
    dependentsList: DependentsList[];
}