import { Directive } from '@angular/core';

@Directive({
  selector: 'card-header',
  host: {'class': 'card__header card__header--direction-column' },
  standalone: false
})
export class CardHeaderDirective {

  constructor() { }

}
