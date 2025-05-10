import { CommonModule, DatePipeConfig } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusPipe } from './pipes/status.pipe';
import { userStatusEnum } from './enums/userStatusEnum';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ObsObjComponent } from './components/obs-obj/obs-obj.component';

registerLocaleData(localePt)


const datePipeConfig: DatePipeConfig = {dateFormat: 'dd/MM/YYYY', timezone: '-0003'}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ObsObjComponent, CommonModule, StatusPipe, TruncatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [{provide:DATE_PIPE_DEFAULT_OPTIONS, useValue: datePipeConfig}, {provide: LOCALE_ID, useValue: 'pt-BR'}]
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
