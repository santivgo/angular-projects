import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comp1',
  imports: [AsyncPipe],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.sass'
})
export class Comp1Component {
  constructor(private readonly _cadastro: CadastroService){}
  num: number = 0;

}
