import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-cell',
  standalone: false,
  templateUrl: './user-info-cell.component.html',
  styleUrl: './user-info-cell.component.sass'
})
export class UserInfoCellComponent {
  @Input({ required: true }) itemName: string = ''
  @Input({ required: true }) item: string | null = ''

}
