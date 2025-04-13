import { Component } from '@angular/core';
import { randomColor } from '../utils/randomColor';

@Component({
  selector: 'app-sem-diretiva',
  standalone: false,
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.sass'
})
export class SemDiretivaComponent {

  addBgColor: boolean = false;
  r: number = 0;
  g: number = 0;
  b: number = 0;


  changeColor(clique: MouseEvent) {
    this.addBgColor = true
  }

  defaultColor(clique: MouseEvent) {
    this.addBgColor = false
  }
}
