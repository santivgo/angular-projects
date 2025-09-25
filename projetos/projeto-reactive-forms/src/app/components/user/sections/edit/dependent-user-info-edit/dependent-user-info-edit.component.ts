import { Component, Input } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';
import { Form, FormArray, FormGroup } from '@angular/forms';
import { UserFormController } from '../../../forms/user-form-controller';

@Component({
  selector: 'app-dependent-user-info-edit',
  standalone: false,
  templateUrl: './dependent-user-info-edit.component.html',
  styleUrl: './dependent-user-info-edit.component.sass'
})
export class DependentUserInfoEditComponent extends UserFormController {
  @Input({ required: true, alias: 'userInfoForm' }) userInfoF!: FormGroup



}
