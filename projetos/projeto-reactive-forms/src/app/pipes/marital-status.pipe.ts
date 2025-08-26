import { Pipe, PipeTransform } from "@angular/core";
import { MaritalStatusEnum } from "../enums/marital-status.enum";
@Pipe({
    name: 'maritalStatus'
})

export class MaritalStatusPipe implements PipeTransform {
    transform(maritalStatus: number) {
        const marital: { [key: number]: string } = {
            [MaritalStatusEnum.SOLTEIRO]: 'Solteiro',
            [MaritalStatusEnum.CASADO]: 'Casado',
            [MaritalStatusEnum.DIVORCIADO]: 'Divorciado'
        }
        return maritalStatus ? marital[maritalStatus] : ''

    }


}