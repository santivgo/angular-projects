import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: false,
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.sass'
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm!: FormGroup

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: this.fb.control('', [Validators.required])
    })
  }

}
