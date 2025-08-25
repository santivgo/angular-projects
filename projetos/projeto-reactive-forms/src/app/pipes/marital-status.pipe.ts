import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'maritalStatus'
})

export class maritalStatusPipe implements PipeTransform {
    transform(maritalStatus: number) {
        let marital: { [key: number]: string } = {
            1: 'Solteiro',
            2: 'Casado',
            3: 'Divorciado'
        }
        return marital[maritalStatus]

    }


}