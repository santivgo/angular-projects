import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  standalone: false,
  templateUrl: './form-array-com-group.component.html',
  styleUrl: './form-array-com-group.component.sass'
})
export class FormArrayComGroupComponent {
  musicasForm: FormGroup = new FormGroup({
    musicas: new FormArray([
      new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        banda: new FormControl('', [Validators.required])
      })])
  })

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray
  }

  adicionaMusica(): void {
    this.musicas.push(new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      banda: new FormControl('', [Validators.required])
    }))
  }
}
