import { Pipe, PipeTransform } from "@angular/core";
import { PhoneTypeEnum } from "../enums/phone-type.enum";

@Pipe({
    'name': 'maskPhone'
})
export class maskPhonePipe implements PipeTransform {

    transform(phoneType: number) {
        const phoneMaskMap: { [key: string]: string } = {
            [PhoneTypeEnum.RESIDENCIAL]: '+00 00 0000-0000',
            [PhoneTypeEnum.CELULAR]: '+00 00 00000-0000',
            [PhoneTypeEnum.EMERGENCIA]: '+00 00 0000-0000 || +00 00 00000-0000',
        }
        return phoneMaskMap[phoneType]

    }

}