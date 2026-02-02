import { add } from "date-fns";
import { IAddress } from "../interfaces/user/address.interface";
import { IPhone } from "../interfaces/user/phone.interface";
import { IUserForm, IUserFormAddress, IUserFormContactInformation, IUserFormDependent, IUserFormGeneralInformation, IUserFormPhone } from "../interfaces/user/user-form.interface";
import { IUser } from "../interfaces/user/user.interface";
import { AddressList } from "../types/address-list.type";
import { PhoneList } from "../types/phone-list.type";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br";
import { DependentList } from "../types/dependent-list.type";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;
    newUser = { ...convertGeneralInformations(userForm.generalInformations) };
    newUser.phoneList = [...convertPhoneList(userForm.contactInformations.phoneList)];
    newUser.addressList = [...convertAddressList(userForm.contactInformations.addressList)]
    newUser.dependentsList = [...convertDependentList(userForm.dependentList)]
    return newUser as IUser;
}

function convertDependentList(dependentList: IUserFormDependent[]): DependentList {
    const newUserDependentList: DependentList = dependentList
        .map((dependent) => {
            return {
                'name': dependent.name,
                'age': parseInt(dependent.age),
                'document': parseInt(dependent.document)
            }
        })
    return newUserDependentList;

}

function convertPhoneList(phoneList: IUserFormPhone[]): PhoneList {

    const newUserPhoneList: PhoneList = phoneList.map((phone) => {
        return {
            type: phone.type,
            internationalCode: phone.phone.substring(0, 2),
            areaCode: phone.phone.substring(2, 4),
            number: phone.phone.substring(4)
        }
    })

    return newUserPhoneList
}


function convertAddressList(AddressList: IUserFormAddress[]): AddressList {
    const addressList: AddressList = AddressList.map((address: IAddress) => {
        return {
            type: address.type,
            city: address.city,
            street: address.street,
            complement: address.complement,
            country: address.country,
            state: address.state,
        }


    })
    return addressList;

}

function convertGeneralInformations(generalInformations: IUserFormGeneralInformation): Partial<IUser> {
    return {
        name: generalInformations.name,
        email: generalInformations.email,
        country: generalInformations.country,
        state: generalInformations.state,
        maritalStatus: generalInformations.maritalStatus,
        monthlyIncome: generalInformations.monthlyIncome,
        birthDate: generalInformations.birthDate

    }
}