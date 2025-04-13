import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: false
})
export class DisabledDirective {

  @HostBinding('disabled') disabled = true

}
