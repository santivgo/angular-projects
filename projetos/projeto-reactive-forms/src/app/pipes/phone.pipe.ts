import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    'name': 'phone'
})

export class PhonePipe implements PipeTransform {
    transform(phone: string, DDD: string, DDI: string) {
        return (phone && DDD && DDI) ? `${DDI} ${DDD} ${phone}` : ''
    }

}