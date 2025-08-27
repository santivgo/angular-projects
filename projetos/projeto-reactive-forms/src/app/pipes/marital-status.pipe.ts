import { Pipe, PipeTransform } from "@angular/core";
import { MaritalStatusEnum } from "../enums/marital-status.enum";
import { MaritalStatusMap } from "../utils/marital-type.map";
@Pipe({
    name: 'maritalStatus'
})

export class MaritalStatusPipe implements PipeTransform {
    transform(maritalStatus: number) {
        return maritalStatus ? MaritalStatusMap[maritalStatus] : ''

    }


}