import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IUser } from '../../../core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IGenre } from '../../../core/interfaces/genre.interface';
import { IState } from '../../../core/interfaces/state.interface';
import {MatCardModule} from '@angular/material/card';
import { InvalidEmailDirective } from '../../../core/validators/email-validator.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CredentialsValidatorDirective } from '../../../core/validators/credentials-validator.directive';


@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatTableModule, MatDividerModule, MatCheckboxModule, MatDatepickerModule, MatCardModule, MatProgressBarModule, InvalidEmailDirective, CredentialsValidatorDirective],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  @Input({'required': true, alias: 'genres'}) genreList: IGenre[] = []
  @Input({'required': true, alias: 'states'}) stateList: IState[] = []
  @Input({'required': true}) user: IUser = {} as IUser;
  displayedColumns: string[] = ['titulo', 'artista', 'genero', 'favorita'];





}
