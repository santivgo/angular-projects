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
    this.buttonsEl.changes.subscribe((result) => {
      console.log(result)
    })
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  }

  resetarBotoes() {
    for (const item of this.buttonsEl) {
      const el = item.nativeElement as HTMLButtonElement
      el.style.background = "initial";
    }
  }
  changeColor(event: MouseEvent) {
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = this.getRandomColor();
  }

  removerItem() {
    this.buttonsList.shift()
  }
}
