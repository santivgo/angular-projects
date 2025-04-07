import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {

  title = 'aula-diretivas';


  constructor(private readonly _elRef: ElementRef) {

  };

  ngOnInit(): void {
    console.log(this._elRef)
    const divRef: HTMLDivElement = this._elRef.nativeElement.querySelector("#minha-outra-div")
    console.log(divRef)
  }


}
