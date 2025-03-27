import { Component, ElementRef, ViewChild } from '@angular/core';
import { IInputForm } from '../../interfaces/input-form.interface';
import { IChurrasco } from '../../interfaces/churrasco.interface';
import { calcular } from '../../utils/calcular-churrasco';

@Component({
  selector: 'app-chur-form',
  standalone: false,
  templateUrl: './chur-form.component.html',
  styleUrl: './chur-form.component.sass'
})
export class ChurFormComponent {
  inputForm: IInputForm = {} as IInputForm;
  churrasInfo: IChurrasco | undefined;

  @ViewChild('formChurras')
  formChurrasEl!: ElementRef<HTMLDivElement>;



  validar(): void {
    const VALID_VALUES = this.inputForm.adultos > 0 && this.inputForm.criancas > 0 && this.inputForm.duracaoHrs > 0;
    const VALID_FORM = this.inputForm.adultos && this.inputForm.criancas && this.inputForm.duracaoHrs 
    if (VALID_FORM && VALID_VALUES) {
      this.churrasInfo = calcular(this.inputForm)
    }


  }
}
