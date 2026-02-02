export interface IUserFormGeneralInformation {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
}

export interface IUserFormAddress {
    city: string;
    complement: string;
    country: string;
    state: string;
    street: string;
    type: number;
    typeDescription: string;
}

export interface IUserFormPhone {
    typeDescription: string;
    type: number;
    phone: string;
}

export interface IUserFormContactInformation {
    addressList: IUserFormAddress[];
    phoneList: IUserFormPhone[];
}

export interface IUserFormDependent {
    age: string;
    document: string;
    name: string;
}

export interface IUserForm {
    generalInformations: IUserFormGeneralInformation;
    contactInformations: IUserFormContactInformation;
    dependentList: IUserFormDependent[];
}