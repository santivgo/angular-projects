import { Component, Input } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';

@Component({
  selector: 'app-user-dependent-list',
  standalone: false,
  templateUrl: './user-dependent-list.component.html',
  styleUrl: './user-dependent-list.component.sass'
})
export class UserDependentListComponent {
  @Input({ required: true, alias: 'dependentList' }) userDependentList!: DependentList
}
