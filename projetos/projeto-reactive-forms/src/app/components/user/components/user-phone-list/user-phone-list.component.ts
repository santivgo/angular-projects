import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list.type';
import { PhoneTypeMap } from '../../../../utils/phone-type.map';
import { IPhone } from '../../../../interfaces/user/phone.interface';

@Component({
  selector: 'app-user-phone-list',
  standalone: false,
  templateUrl: './user-phone-list.component.html',
  styleUrl: './user-phone-list.component.sass'
})
export class UserPhoneListComponent implements OnChanges {
  @Input({ required: true }) phoneList: PhoneList = []
  displayedPhoneList: { type: string, phone: string }[] = []

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['phoneList'].previousValue) this.displayedPhoneList = []
    const PHONE_LIST_LOADED = Array.isArray(changes['phoneList'].currentValue)
    if (PHONE_LIST_LOADED) {
      this.displayPhoneList()
    }
  }

  formatPhone(phone: IPhone): string {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
  }

  displayPhoneList(): void {
    Object.keys(PhoneTypeMap).map(Number).forEach((value) => {
      const foundPhone: IPhone | undefined = this.phoneList.find((phone) => phone.type === value)
      this.displayedPhoneList.push({
        type: PhoneTypeMap[value],
        phone: foundPhone ? this.formatPhone(foundPhone) : '-'
      })

    })

  }
}
