import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'publisher'
})
export class PublisherPipe implements PipeTransform {
    transform(publisher: string): string {
        return publisher === "." ? 'No publisher, is a original character.' : publisher
    }
}