import { AddressList } from "../../types/address-list.type";
import { DependentList } from "../../types/dependent-list.type";
import { PhoneList } from "../../types/phone-list.type";


export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: PhoneList;
    addressList: AddressList;
    dependentsList: DependentList;
}