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
import { format, formatDate, parse } from 'date-fns'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ComponentsModule } from '../../../../components.module';
import { ICountry } from '../../../../../interfaces/country-response/country.interface';
import { IState } from '../../../../../interfaces/states-response/state.interface';

@Component({
  selector: 'app-general-user-info-edit',
  standalone: false,
  templateUrl: './general-user-info-edit.component.html',
  styleUrl: './general-user-info-edit.component.sass',
  providers: [CurrencyPipe]
})
export class GeneralUserInfoEditComponent implements OnInit, OnChanges {


  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _stateService: StateService,
    private currencyPipe: CurrencyPipe,
  ) { }

  @Input({ 'required': true }) generalInfoForm!: FormGroup
  countryList: CountryList = []
  filteredCountryList: CountryList = []


  stateList: StateList = []
  filteredStateList: StateList = []
  showUserBirthDay!: Date

  ngOnInit(): void {
    this.getCountriesFromApi()
    this.onCountrySelected()
    this.watchCountryAndFilter()
    this.watchStateAndFilter()
  }
  private watchStateAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStateList.bind(this))
  }
  private watchCountryAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountryList.bind(this))
  }

  private filterCountryList(searchTerm: string): void {
    if (this.countryList.length > 0 && searchTerm) {
      this.filteredCountryList = this.countryList.filter(
        (item: ICountry) => item.country.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase().trim()))
    }


  }
  private filterStateList(searchTerm: string): void {
    if (this.stateList.length > 0 && searchTerm) {

      this.filteredStateList = this.stateList.filter(
        (item: IState) => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase().trim()))
    }

  }

  onCountrySelected() {
    this._stateService.getStates(this.countryControl.value).subscribe((stateList: StateList) => this.stateList = stateList)
  }

  get emailControl(): FormControl {
    return this.generalInfoForm.get('email') as FormControl
  }

  get stateControl(): FormControl {
    return this.generalInfoForm.get('state') as FormControl
  }
  get countryControl(): FormControl {
    return this.generalInfoForm.get('country') as FormControl
  }

  private getCountriesFromApi(): void {
    this._countriesService.getCountries().pipe(take(1)).subscribe(
      (countryList: CountryList) => this.countryList = countryList)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['generalInfoForm'].currentValue) {
      this.updateForm(changes['generalInfoForm'].currentValue)
    }
  }
  get dateValue(): Date {
    return parse(this.generalInfoForm.get('birthDate')?.value, 'dd/MM/yyyy', new Date())
  }

  updateForm(currentValue: IUser) {
    this.generalInfoForm.patchValue(currentValue)
  }

  onDateChange(event: any): void {
    this.generalInfoForm.patchValue({
      'birthDate': format(event.value, 'dd/MM/yyyy')
    })

  }

}
