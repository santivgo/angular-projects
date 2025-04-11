import { Component, Input } from '@angular/core';


interface IItem {
  text1: string,
  text2: string
}

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
