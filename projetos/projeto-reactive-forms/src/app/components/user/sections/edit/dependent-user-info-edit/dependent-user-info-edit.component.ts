import { Component, Input } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependent-user-info-edit',
  standalone: false,
  templateUrl: './dependent-user-info-edit.component.html',
  styleUrl: './dependent-user-info-edit.component.sass'
})
export class DependentUserInfoEditComponent {
  @Input({ required: true }) userInfoForm!: FormGroup

  get dependentList(): FormArray{
    return this.userInfoForm.get('dependentList') as FormArray
  }
}
