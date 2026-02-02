import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonColorMap } from '../../../utils/maps/button-color.map';

@Component({
  selector: 'app-dummy-button',
  standalone: false,
  templateUrl: './dummy-button.component.html',
  styleUrl: './dummy-button.component.sass'
})
export class DummyButtonComponent implements OnChanges {

  @Input() icon: string = '';
  @Input({ required: true }) textButton: string = '';
  @Input({ required: true }) colorButton: string = ''
  @Input() disabled: boolean = false
  additionalClasses(): string[] {
    const base = this.disabled ? ['opacity-50', 'cursor-not-allowed'] : ['cursor-pointer', 'active:translate-y-1', 'ease', 'duration-50']
    return [...base, ...ButtonColorMap[this.colorButton]];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
    }
  }



}
