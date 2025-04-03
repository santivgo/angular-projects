import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]',
  standalone: false
})
export class InputBackgroundDirective {



  @Input() appInputBackground: string = "blue"
  @HostListener('focus', ['$event'])
  onClickEvent(click: MouseEvent): void {
    const el = click.target as HTMLInputElement
    el.style.backgroundColor = this.appInputBackground;
  }
}
