import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../../types/phone-list.type';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-phone-list',
  standalone: false,
  templateUrl: './edit-user-phone-list.component.html',
  styleUrl: './edit-user-phone-list.component.sass'
})
export class EditUserPhoneListComponent implements OnChanges {
  @Input({ required: true, alias: 'phoneList' }) userPhoneArray!: FormArray
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userPhoneArray']) {
      console.log(this.userPhoneArray)
    }
  }



}
