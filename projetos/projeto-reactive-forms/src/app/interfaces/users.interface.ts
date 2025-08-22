export interface PhoneList {
    type: number;
    areaCode: string;
    internationalCode: string;
    number: string;
}

export interface AddressList {
    type: number;
    street: string;
    complement: string;
    country: string;
    state: string;
    city: string;
}

export interface DependentsList {
    name: string;
    age: number;
    document: number;
}

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