import { Component, Input } from '@angular/core';
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
import { EstadosEnum } from '../../../core/enums/states.enum';


@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatTableModule, MatDividerModule, MatCheckboxModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  @Input({'required': true}) user: IUser = {} as IUser;
  estados = Object.values(EstadosEnum)
  displayedColumns: string[] = ['titulo', 'artista', 'genero', 'favorita'];

}
