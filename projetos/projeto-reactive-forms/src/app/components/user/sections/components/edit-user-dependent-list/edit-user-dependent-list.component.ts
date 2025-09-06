import { Component, Input } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';

@Component({
  selector: 'app-edit-user-dependent-list',
  standalone: false,
  templateUrl: './edit-user-dependent-list.component.html',
  styleUrl: './edit-user-dependent-list.component.sass'
})
export class EditUserDependentListComponent {
  @Input({ required: true, alias: 'dependentList' }) userDependentList!: DependentList
}
