import { Component, Input } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';

@Component({
  selector: 'app-dependent-user-info',
  standalone: false,
  templateUrl: './dependent-user-info.component.html',
  styleUrl: './dependent-user-info.component.sass'
})
export class DependentUserInfoComponent {
  @Input({ required: true }) dependentList!: DependentList
}
