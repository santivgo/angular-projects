import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DependentList } from '../../../../../types/dependent-list.type';
import { Form, FormArray, FormGroup } from '@angular/forms';
import { UserFormController } from '../../../forms/user-form-controller';

@Component({
  selector: 'app-dependent-user-info-edit',
  standalone: false,
  templateUrl: './dependent-user-info-edit.component.html',
  styleUrl: './dependent-user-info-edit.component.sass'
})
export class DependentUserInfoEditComponent {
  @Input({ required: true, alias: 'userInfoForm' }) userInfoForm!: FormGroup

  get dependentList(): FormArray {
    return this.userInfoForm.get('dependentList') as FormArray
  }
  @Output('onRemoveDependent') onRemoveDependentEmitt: EventEmitter<number> = new EventEmitter<number>
  @Output('onCreateDependent') onCreateDependentEmitt: EventEmitter<void> = new EventEmitter<void>



  removeDependent(i: number): void {
    this.onRemoveDependentEmitt.emit(i)
  }


  createEmptyDependent(): void {
    this.onCreateDependentEmitt.emit()
  }


}
