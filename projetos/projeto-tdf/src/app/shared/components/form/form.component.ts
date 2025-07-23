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
import { EstadosEnum } from '../../../core/enums/states.enum';
import { genresService } from '../../../core/services/genres.service';
import { IGenre } from '../../../core/interfaces/genre.interface';
import { IState } from '../../../core/interfaces/state.interface';
import { BrazilianStatesService } from '../../../core/services/brazilianStates.service';


@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, CommonModule, MatTableModule, MatDividerModule, MatCheckboxModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent implements OnInit {
  genreList: IGenre[] = []
  estados: IState[] = []
  @Input({'required': true}) user: IUser = {} as IUser;
  displayedColumns: string[] = ['titulo', 'artista', 'genero', 'favorita'];

  constructor(private readonly _genresService: genresService, private readonly _brazilianStatesService: BrazilianStatesService){}

  getGenres(){
    this._genresService.getAllGenres().subscribe((genreList)=> this.genreList = genreList)
  }
  
  getStates(){
    this._brazilianStatesService.getStates().subscribe((states)=> this.estados = states)
  }
  


  
  ngOnInit(): void {
   this.getGenres()
   this.getStates()
  }




}
