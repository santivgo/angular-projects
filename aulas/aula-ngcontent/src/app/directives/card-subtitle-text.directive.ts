import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-subtitle-text',
  host: {'class': 'ca-c-card__subtitle-text'},

  standalone: false
})
export class CardSubtitleTextDirective {

  constructor() { }

}
