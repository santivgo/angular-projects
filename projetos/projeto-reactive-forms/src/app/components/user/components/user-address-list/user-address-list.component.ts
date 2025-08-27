import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list.type';
import { AddressListToDisplay } from '../../../../types/address-list-to-display.type';
import { AddressTypeMap } from '../../../../utils/address-type.map';
import { IAddress } from '../../../../interfaces/user/address.interface';

@Component({
  selector: 'app-user-address-list',
  standalone: false,
  templateUrl: './user-address-list.component.html',
  styleUrl: './user-address-list.component.sass'
})
export class UserAddressListComponent implements OnChanges {
  @Input({ 'required': true }) addressList: AddressList = []
  displayedAddressList: AddressList = []

  ngOnChanges(changes: SimpleChanges): void {

    const ADDRESS_LIST_LOADED = Array.isArray(changes['addressList'].currentValue)
    if (ADDRESS_LIST_LOADED) {
      this.displayAddressList()
    }
  }


  displayAddressList(): void {
    this.displayedAddressList = []
    Object.keys(AddressTypeMap).map(Number).forEach((value) => {
      const foundAddress: IAddress | undefined = this.addressList.find((address) => address.type === value)
      this.displayedAddressList.push(
        foundAddress ? foundAddress : {
          type: value,
          street: '-',
          complement: '-',
          country: '-',
          state: '-',
          city: '-'
        }

      )

    })
  }
}
