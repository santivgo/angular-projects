import { Pipe, PipeTransform } from "@angular/core";
import { AddressTypeEnum } from "../enums/address-type.enum";
import { AddressTypeMap } from "../utils/address-type.map";

@Pipe({
    name: 'addressType'
})
export class AddressTypePipe implements PipeTransform {
    transform(addressType: number) {
        return addressType ? AddressTypeMap[addressType] : ''
    }

}