import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-brand',
  standalone: false,
  templateUrl: './card-brand.component.html',
  styleUrl: './card-brand.component.sass'
})
export class CardBrandComponent {
  @Input({ 'required': true })
  cardNumber: string = "";

  @Input({ 'required': true })
  cardOwner: string = "";

  @Input({ 'required': true })
  brand: string = "";

}
