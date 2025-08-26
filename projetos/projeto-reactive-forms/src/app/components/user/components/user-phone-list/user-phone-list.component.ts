import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list.type';
import { PhoneTypeMap } from '../../../../utils/phone-type.map';

@Component({
  selector: 'app-user-phone-list',
  standalone: false,
  templateUrl: './user-phone-list.component.html',
  styleUrl: './user-phone-list.component.sass'
})
export class UserPhoneListComponent implements OnChanges {
  @Input({ required: true }) phoneList: PhoneList = []
  displayedPhoneList: { type: "Residencial" | "Emergência" | "Celular", number: string }[] = []
  residentialPhone: string = '-'
  emergencyPhone: string = '-'
  phone: string = '-'

  ngOnChanges(changes: SimpleChanges): void {
    const PHONE_LIST_LOADED = Array.isArray(changes['phoneList'].currentValue)
    if (PHONE_LIST_LOADED) {
      this.displayPhoneList()
    }
  }

  displayPhoneList(): void {
    this.phoneList.map((phone) => {
      if (PhoneTypeMap[phone.type] === "Residencial") {

      }
    })

  }
}
