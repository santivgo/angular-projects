import { Component, Input } from '@angular/core';
import { IHeader } from '../../interfaces/IHeader.interface';

@Component({
  selector: 'app-card-header',
  standalone: false,
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.sass'
})
export class CardHeaderComponent {
  @Input({ 'required': true, alias: 'header' })
  header: IHeader = {} as IHeader


}
