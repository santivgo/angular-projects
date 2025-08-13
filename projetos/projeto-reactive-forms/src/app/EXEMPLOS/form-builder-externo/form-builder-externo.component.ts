import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormExterno } from './form-externo';

@Component({
  selector: 'app-form-builder-externo',
  standalone: false,
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.sass'
})
export class FormBuilderExternoComponent extends FormExterno {
  constructor() { super() }

}
