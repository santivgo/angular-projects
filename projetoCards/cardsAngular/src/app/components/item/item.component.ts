import { Component, Input } from '@angular/core';
import { IItem } from '../../interfaces/IItem.interface';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.sass'
})
export class ItemComponent {
  @Input({ required: true, alias: 'item' })
  item = {} as IItem;
}
