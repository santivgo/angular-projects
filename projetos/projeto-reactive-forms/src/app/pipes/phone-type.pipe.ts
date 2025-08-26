import { Pipe, PipeTransform } from "@angular/core";
import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { PhoneTypeMap } from "../utils/phone-type.map";

@Pipe({
    'name': 'phoneType'
})
export class PhoneTypePipe implements PipeTransform {
    transform(phoneType: number) {
        return phoneType ? PhoneTypeMap[phoneType] : ''
    }

}