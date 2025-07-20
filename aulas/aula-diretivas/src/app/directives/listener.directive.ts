import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
  standalone: false
})
export class ListenerDirective {

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const text = event.target as HTMLInputElement
    console.log(text.value)
  }
}
