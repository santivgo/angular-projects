import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.sass'
})
export class Comp2Component {
  constructor(private readonly _cadastro: CadastroService){}
  num: number = 0;


}
