import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { maskPhonePipe } from '../../../../../pipes/phone-mask.pipe';
@Component({
  selector: 'app-edit-user-phone-list',
  standalone: false,
  templateUrl: './edit-user-phone-list.component.html',
  styleUrl: './edit-user-phone-list.component.sass'
})
export class EditUserPhoneListComponent implements OnChanges {
  @Input({ required: true, alias: 'contactInfoForm' }) contactInfoForm!: FormGroup
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contactInfoForm']) {
      console.log(this.contactInfoForm.get('phoneList'))
    }
  }

  get phoneList(): FormArray {
    return this.contactInfoForm.get('phoneList') as FormArray
  }



}
