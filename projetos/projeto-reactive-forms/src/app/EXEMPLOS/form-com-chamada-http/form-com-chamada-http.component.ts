import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { IUser } from '../interfaces/user.interface';


@Component({
  selector: 'app-form-com-chamada-http',
  standalone: false,
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.sass'
})
export class FormComChamadaHttpComponent implements OnInit {
  pessoaForm!: FormGroup;
  constructor(private readonly _userService: UsersService) { }

  ngOnInit(): void {
    this.createPessoaForm()
    this.getUserAndFulfill()
  }
  getUserAndFulfill(): void {
    this._userService.getUser(1).subscribe((user) => this.fillPessoaForm(user))
  }

  fillPessoaForm(user: IUser) {
    const pessoaInterfaceRelation = {
      nome: user.name,
      email: user.email,
      telefone: user.phone,

    }
    this.pessoaForm.patchValue(pessoaInterfaceRelation)
  }

  createPessoaForm(): void {

    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl('')
    });
  }

}

