import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]',
  standalone: false
})
export class InputBackgroundDirective {



  @Input() appInputBackground: string = "blue"
  @Input() textColor: string = 'black'

  @HostBinding('style.backgroundColor') bg = "white"
  @HostBinding('style.color') color = ''

  @HostListener('focus')
  onClickEvent(): void {
    this.bg = this.appInputBackground
    this.color = this.textColor;

  }

  @HostListener('blur')
  onBlurEvent(): void {
    this.bg = 'initial'
    this.color = 'initial'
  }


}
