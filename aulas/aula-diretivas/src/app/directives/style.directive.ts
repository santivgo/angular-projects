import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: false
})
export class StyleDirective {
  @HostBinding('style') sty = {
    "background-color": "orange",
    "color": "white",

  };
}
