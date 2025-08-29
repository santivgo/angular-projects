import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform {
    transform(value: string, hideNumber: boolean): string {
        const regExp: RegExp = new RegExp(/^(\d{3})(\d{3})(\d{3})(\d{2})$/)
        const regexObj: RegExpMatchArray | null = value.match(regExp)
        if (regexObj) {
            return `${hideNumber ? 'XXX' : regexObj[1]}.${regexObj[2]}.${regexObj[3]}-${hideNumber ? 'XX' : regexObj[4]}`
        }
        return ''
    }

}