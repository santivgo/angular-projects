import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../../../../interfaces/user/user.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MaritalStatusMap } from '../../../../../utils/maps/marital-type.map';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { CountriesService } from '../../../../../services/countries.service';
import { CountryList } from '../../../../../types/country-list.type';
import { count, Observable, take } from 'rxjs';
import { StateList } from '../../../../../types/state-list.type';
import { StateService } from '../../../../../services/states.service';
import { format, parse } from 'date-fns'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-general-user-info-edit',
  standalone: false,
  templateUrl: './general-user-info-edit.component.html',
  styleUrl: './general-user-info-edit.component.sass',
  providers: [CurrencyPipe]
})
export class GeneralUserInfoEditComponent implements OnChanges {


  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _stateService: StateService,
    private currencyPipe: CurrencyPipe,
  ) { }

  @Input({ 'required': true }) userInfoForm!: FormGroup
  countryList!: CountryList
  stateList!: StateList


  getCountries(): void {
    this._countriesService.getCountries().pipe(take(1)).subscribe(
      (countryList) => this.countryList = countryList)
  }

  getStates(): void {
    const country: string = this.userInfoForm.get('country')?.value ?? '';
    this._stateService.getStates(country).pipe(take(1)).subscribe((stateList) => this.stateList = stateList)
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInfoForm'].currentValue) {
      this.updateForm(changes['userInfoForm'].currentValue)
      this.getCountries()
      this.getStates()
    }
  }
  updateForm(currentValue: IUser) {
    this.userInfoForm.reset()
    this.userInfoForm.patchValue(currentValue)
  }

  onDateChange({ value }: { value: string }): void {
    this.userInfoForm.patchValue({
      'birthDate': value
    })

  }

}
