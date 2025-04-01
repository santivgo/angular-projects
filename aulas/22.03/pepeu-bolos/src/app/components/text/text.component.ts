import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.sass'
})
export class TextComponent {

  seletor = 0;
  lista: string[] = ['Pêpeu Cakes!!!!', 'Pêpeu Cakes: um fenômeno'];
  title = this.lista[this.seletor];


  mudaTitle(): void{
    this.seletor = this.seletor ? 0 : 1;
    this.title = this.lista[this.seletor];
  }

  bagunca(event: MouseEvent){
    const elemento = event.target as HTMLElement;
    elemento.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    elemento.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
  
  }
}
