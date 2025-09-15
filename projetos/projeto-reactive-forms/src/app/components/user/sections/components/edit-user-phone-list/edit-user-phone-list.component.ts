import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../../types/phone-list.type';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PhoneTypeEnum } from '../../../../../enums/phone-type.enum';

@Component({
  selector: 'app-edit-user-phone-list',
  standalone: false,
  templateUrl: './edit-user-phone-list.component.html',
  styleUrl: './edit-user-phone-list.component.sass'
})
export class EditUserPhoneListComponent implements OnChanges {
  @Input({ required: true, alias: 'contactInfoForm' }) contactInfoForm!: FormGroup
  PhoneTypeEnum = PhoneTypeEnum
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contactInfoForm']) {
      console.log(this.contactInfoForm.get('phoneList'))
    }
  }

  get phoneList(): FormArray {
    return this.contactInfoForm.get('phoneList') as FormArray
  }



}
