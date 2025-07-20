import { ChangeDetectorRef, Component } from '@angular/core';
import { IClock } from '../../interfaces/clock';
import { differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Component({
  selector: 'app-clock',
  standalone: false,
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.sass'
})
export class ClockComponent {
  clock: IClock | undefined;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 1000)
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class

  }
  updateClock() {

    const dateDate = new Date(2025, 0, 18)
    const dataAtual = new Date()
    dataAtual.toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' })
    const diferencaMeses = differenceInMonths(dataAtual, dateDate)
    const diferencaDias = differenceInDays(dataAtual, dateDate) % 30
    const diferencaHoras = differenceInHours(dataAtual, dateDate) % 24

    const diferencaMinutos = differenceInMinutes(dataAtual, dateDate) % 60
    const diferencaSegundos = differenceInSeconds(dataAtual, dateDate) % 60


    this.clock = {
      month: diferencaMeses,
      hour: diferencaHoras,
      day: diferencaDias,
      minute: diferencaMinutos,
      second: diferencaSegundos

    }

    this.cdr.detectChanges()


  }
}
