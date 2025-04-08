import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private _elRef: ElementRef) { }
  create() {
    const novoP = document.createElement('p')
    novoP.textContent = "Olá"
    novoP.classList.add("bg-red")

    this._elRef.nativeElement.appendChild(novoP)
  }
}
