import { AddressTypeEnum } from "../../enums/address-type.enum";

export const AddressTypeMap: { [key: number]: string } = {
    [AddressTypeEnum.TRABALHO]: 'Trabalho',
    [AddressTypeEnum.RESIDENCIAL]: 'Residencial',
    [AddressTypeEnum.ALTERNATIVO]: 'Alternativo',
}