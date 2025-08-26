import { Pipe, PipeTransform } from "@angular/core";
import { AddressTypeEnum } from "../enums/address-type.enum";

@Pipe({
    name: 'addressType'
})
export class AddressTypePipe implements PipeTransform {
    transform(addressType: number) {
        const addressTypeMap: { [key: number]: string } = {
            [AddressTypeEnum.TRABALHO]: 'Trabalho',
            [AddressTypeEnum.RESIDENCIAL]: 'Residencial',
            [AddressTypeEnum.ALTERNATIVO]: 'Alternativo',
        }
        return addressType ? addressTypeMap[addressType] : ''
    }

}