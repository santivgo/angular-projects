import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent implements AfterViewInit {
  buttonsList: string[] = ["Ta", "Tarde", "Eu", "Sei"]

  @ViewChildren('meusButtons')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {
    console.log(this.buttonsEl)

  }

}
