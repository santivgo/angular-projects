import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: false
})
export class ClassDirective {

  @HostBinding('class') classes = {'active': true}
}
