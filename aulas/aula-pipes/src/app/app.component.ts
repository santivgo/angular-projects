import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusPipe } from './pipes/status.pipe';
import { userStatusEnum } from './enums/userStatusEnum';
import { TruncatePipe } from './pipes/truncate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StatusPipe, TruncatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  pessoa = {
    nome: 'Nargas',
    idade: 20,
    status: userStatusEnum.ATIVO,
    data_cadastro: '2024-11-04T10:30:00'
  }
  title = 'aula-pipes';

  ngOnInit(): void {
    console.log('', new Date(this.pessoa.data_cadastro))
    console.log('UTC-0', new Date(this.pessoa.data_cadastro).toUTCString())
    console.log('Timestamp', new Date(this.pessoa.data_cadastro).getTime())


  }
}
