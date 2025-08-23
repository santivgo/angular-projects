import { Injectable } from "@angular/core";
import { UsersList } from "../types/user-list.type";
import { Observable } from "rxjs";
import { MaritalStatusEnum } from "../enums/marital-status.enum";
import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { AddressTypeEnum } from "../enums/address-type.enum";

@Injectable(
    { providedIn: 'root' }
)
export class UsersService {
    private readonly usersList: UsersList = [
        {
            name: 'Fulano',
            email: 'fulano@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.SOLTEIRO, // -> Estado Civil // -> Solteiro
            monthlyIncome: 5000, // -> Renda Mensal
            birthDate: '25/02/1991',
            phoneList: [
                {
                    type: PhoneTypeEnum.RESIDENCIAL, // -> Residencial
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '1234-5678', // -> Número
                },
                {
                    type: PhoneTypeEnum.CELULAR, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-2222', // -> Número
                },
                {
                    type: PhoneTypeEnum.EMERGENCIA, // -> Emergência
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-4444', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.RESIDENCIAL, // -> Residencial
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                    type: AddressTypeEnum.TRABALHO, // -> Trabalho
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
                {
                    type: AddressTypeEnum.ALTERNATIVO, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.CASADO, // -> Estado Civil // -> Casada
            monthlyIncome: 6000, // -> Renda Mensal
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneTypeEnum.EMERGENCIA, // -> Emergência
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.TRABALHO, // -> Trabalho
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                }
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.DIVORCIADO, // -> Estado Civil // -> Divorciado
            monthlyIncome: 7000, // -> Renda Mensal
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type: 2, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: 3, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        }
    ];


    getUsers(): Observable<UsersList> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.usersList);
                observer.complete()
            }, 300)
        })
    }

}