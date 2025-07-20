import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { IWheelItem } from '../../interfaces/wheel-item.interface';
import { textToList } from '../../utils/text-to-list';
import { circleCanvas, createWheel, draw, spin } from '../../utils/draw/draw-wheel';
import { IOwner } from '../../interfaces/owner.interface';
import { ICanvas } from '../../interfaces/canvas.interface';

@Component({
  selector: 'app-wheel',
  standalone: false,
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.sass'
})
export class WheelComponent implements AfterViewInit {
  constructor(private _cdr: ChangeDetectorRef) { }

  santList: IWheelItem[] = []
  kessList: IWheelItem[] = []
  finalList: IWheelItem[] = []
  winner: IWheelItem = { 'name': 'none', 'movie': 'none' };
  canvas: ICanvas = {} as ICanvas;
  @ViewChild('canvaWheel') canvaWheel!: ElementRef<HTMLCanvasElement>;


  ngAfterViewInit(): void {
    this.canvas = circleCanvas(this.canvaWheel!, this.finalList)
    draw(this.canvas)

  }
  createWheel() {
    createWheel(this.canvas);
  }



  updateFinalList(name: string, list: string[]) {
    const kess = name.toLowerCase() === 'kess'
    const auxList: IWheelItem[] = []

    list.forEach(movie => {
      auxList.push({ name: name, movie: movie })
    })

    if (kess) {
      this.kessList = auxList
    } else {
      this.santList = auxList
    }
    this.finalList = this.kessList.concat(this.santList);
  }
  updateCanvas() {
    this.canvas = circleCanvas(this.canvaWheel!, this.finalList)
    draw(this.canvas)
  }
  fillList(text: string, owner: IOwner) {


    const moviesList: string[] = textToList(text)
    this.updateFinalList(owner.name, moviesList)
    this.updateCanvas()

  }

  spin() {
    spin(this.canvas)
  }
}
