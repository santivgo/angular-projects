import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneListDisplay } from '../../../../../types/phone-list-to-display.type';
import { PhoneList } from '../../../../../types/phone-list.type';
import { IPhone } from '../../../../../interfaces/user/phone.interface';
import { PhoneTypeMap } from '../../../../../utils/phone-type.map';

@Component({
  selector: 'app-user-phone-list',
  standalone: false,
  templateUrl: './user-phone-list.component.html',
  styleUrl: './user-phone-list.component.sass'
})
export class UserPhoneListComponent implements OnChanges {
  @Input({ required: true }) phoneList: PhoneList = []
  displayedPhoneList: PhoneListDisplay = []

  ngOnChanges(changes: SimpleChanges): void {

    const PHONE_LIST_LOADED = Array.isArray(changes['phoneList'].currentValue)
    if (PHONE_LIST_LOADED) {
      this.displayPhoneList()
    }
  }

  formatPhone(phone: IPhone): string {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
  }

  displayPhoneList(): void {
    this.displayedPhoneList = []
    Object.keys(PhoneTypeMap).map(Number).forEach((value) => {
      const foundPhone: IPhone | undefined = this.phoneList.find((phone) => phone.type === value)
      this.displayedPhoneList.push({
        type: PhoneTypeMap[value],
        value: foundPhone ? this.formatPhone(foundPhone) : '-'
      })

    })

  }
}
