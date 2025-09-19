import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../../../../interfaces/user/user.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PhoneList } from '../../../../../types/phone-list.type';
import { AddressList } from '../../../../../types/address-list.type';

@Component({
  selector: 'app-contact-user-info-edit',
  standalone: false,
  templateUrl: './contact-user-info-edit.component.html',
  styleUrl: './contact-user-info-edit.component.sass'
})
export class ContactUserInfoEditComponent {
  @Input({ 'required': true }) contactInformationsForm!: FormGroup

}
