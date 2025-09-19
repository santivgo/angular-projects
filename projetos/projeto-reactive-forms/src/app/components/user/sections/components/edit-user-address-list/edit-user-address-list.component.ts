import { Component, Input } from '@angular/core';
import { IUser } from '../../../../../interfaces/user/user.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AddressList } from '../../../../../types/address-list.type';

@Component({
  selector: 'app-edit-user-address-list',
  standalone: false,
  templateUrl: './edit-user-address-list.component.html',
  styleUrl: './edit-user-address-list.component.sass'
})
export class EditUserAddressListComponent {
  @Input({ required: true, alias: 'contactInfoForm' }) contactInformationsForm!: FormGroup

  get addressList(): FormArray {
    console.log(this.contactInformationsForm.get('addressList'))
    return this.contactInformationsForm.get('addressList') as FormArray

  }


}
