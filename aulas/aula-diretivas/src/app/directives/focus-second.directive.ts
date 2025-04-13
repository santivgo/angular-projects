import { Directive, ElementRef, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecond]',
  standalone: false
})
export class FocusSecondDirective implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const inp2 = this._elRef.nativeElement.querySelectorAll("input")[1] as HTMLInputElement
    inp2.focus()

  }

}
