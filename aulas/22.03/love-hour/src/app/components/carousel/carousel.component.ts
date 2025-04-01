import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ICarouselImage } from '../../interfaces/carousel-images';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent {
  @Input({ 'required': true, alias: 'imageList' })
  imageList: ICarouselImage[] = [] as ICarouselImage[];

  selectedIndex: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    console.log("oi")
    this.autoSlide()
  }

  autoSlide(): void {
    setInterval(() => { this.nextImage(); }, 3000)
  }

  nextImage(): void {
    if (this.selectedIndex === this.imageList.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex!++
    }
    this.cdr.detectChanges(); // força a atualização no component.html

  }
}
