import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: false,
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.sass'
})
export class FormArrayComponent {
  musicasForm: FormGroup = new FormGroup({
    musicas: new FormArray([])
  })
  
  adicionaMusica(): void{
    this.musicas.push(new FormControl(''))
  }

  removerMusica(index: number): void{
    this.musicas.removeAt(index);
  }

  logging(): void {
    console.log(this.musicas)
  }
  get musicas(): FormArray{
    return this.musicasForm.get('musicas') as FormArray;
  }

}
