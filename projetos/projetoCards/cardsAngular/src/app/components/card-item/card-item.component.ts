import { Component, Input } from '@angular/core';
import { IItem } from '../../interfaces/IItem.interface';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.sass'
})
export class CardItemComponent {
  @Input({ required: true, alias: 'item' })
  item = {} as IItem;
}
