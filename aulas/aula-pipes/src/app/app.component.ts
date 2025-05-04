import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class AppComponent {
  pessoa = {
    nome: 'Nargas',
    idade: 20,
    status: userStatusEnum.ATIVO,

  }
  title = 'aula-pipes';
}
