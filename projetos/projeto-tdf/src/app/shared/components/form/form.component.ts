import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { IUser, IUserMusic } from '../../../core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IGenre } from '../../../core/interfaces/genre.interface';
import { IState } from '../../../core/interfaces/state.interface';
import {MatCardModule} from '@angular/material/card';
import { InvalidEmailDirective } from '../../../core/validators/email-validator.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CredentialsValidatorDirective } from '../../../core/validators/credentials-validator.directive';
import { PasswordStrengthValidatorDirective } from '../../../core/validators/password-strength-validator.directive';
import * as zxcvbn from 'zxcvbn' ;
import { getPasswordStrength } from '../../../core/utils/get-password-strength';
import { EqualPasswordValidator } from '../../../core/validators/equal-password-validator.directive';
import { parse, format } from "date-fns";


@Component({
  selector: 'app-form',
  imports: [
    MatFormFieldModule, MatInputModule,
    MatSelectModule, FormsModule, 
    CommonModule, MatTableModule, 
    MatDividerModule, MatCheckboxModule,
    MatDatepickerModule, MatCardModule, 
    MatProgressBarModule, InvalidEmailDirective,
    CredentialsValidatorDirective, PasswordStrengthValidatorDirective,
    EqualPasswordValidator, MatButtonModule, MatAutocompleteModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent implements OnInit, OnChanges{

  @Input({'required': true, alias: 'genres'}) genreList: IGenre[] = []
  @Input({'required': true, alias: 'states'}) stateList: IState[] = []
  @Input({'required': true}) user: IUser = {} as IUser;
  @ViewChild('repassControl') confirmation!: NgModel
  @Output() userEmitter: EventEmitter<IUser> = new EventEmitter<IUser>();
  displayedColumns: string[] = ['titulo', 'artista', 'genero', 'favorita'];
  filteredGenreList: IGenre[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.confirmation){
      this.confirmation.reset()
      this.onPasswordChange(this.user.password);

    }
  }

  passwordStrengthValue: number = 0;
  birthUserDate: Date | null = null

  ngOnInit(): void {
    this.onPasswordChange(this.user.password);
    this.birthUserDate = parse(this.user.birthDate, 'dd/MM/yyyy', new Date());
  }
  
  getMinDate(): Date{
    const currentYear = this.birthUserDate!.getFullYear()
    const currentMonth = new Date().getMonth()
    const currentDay = new Date().getDay()
    return new Date(currentYear - 100, currentMonth, currentDay);
  }

  getMaxDate(): Date{
    return new Date()
  }

  updateDate(event: NgModel): void {
    this.birthUserDate = new Date(event.control.value)
    this.user.birthDate = format(this.birthUserDate, 'dd/MM/yyyy')
  }


  onPasswordChange(password: string){
    const result: zxcvbn.ZXCVBNResult =  getPasswordStrength(password)
    const WEAK_PASSWORD: boolean = result.score <= 1;
    const MEDIUM_PASSWORD: boolean = result.score <= 3;
    

    if (WEAK_PASSWORD) this.passwordStrengthValue = 30
    else if (MEDIUM_PASSWORD) this.passwordStrengthValue = 60
    else this.passwordStrengthValue = 100
  }

  onFavChanged(favSong: IUserMusic){
    this.user.musics.map((value)=>{
      if(value === favSong) value.isFavorite = true
      else value.isFavorite = false;
    } )
  }

  displayFn(index:number): string{
    if (index){
      const genero = this.genreList.find((genre) => genre.id === index)
      
      return genero?.description ? genero?.description : ''
    }
    return ''
  }


  filterGenres(searchTerm: string) {
    this.filteredGenreList = this.genreList.filter((genre)=> genre.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid){
      return
    }
    this.userEmitter.emit(this.user);
  }


}
