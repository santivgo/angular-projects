import { Directive } from '@angular/core';

@Directive({
  selector: 'card-content',
  host: {'class': 'card__content'},
  standalone: false
})
export class CardContentDirective {

}
