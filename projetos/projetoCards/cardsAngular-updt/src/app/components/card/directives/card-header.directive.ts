import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: {'class': 'ca-c-card__header'},
  standalone: false
})
export class CardHeaderDirective {


}
