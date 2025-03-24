import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ICarouselImage } from '../../interfaces/carousel-images';

@Component({
  selector: 'app-real-content',
  standalone: false,
  templateUrl: './real-content.component.html',
  styleUrl: './real-content.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RealContentComponent {
  @Input({ 'alias': 'image-list', required: true })
  imageList: ICarouselImage[] = [] as ICarouselImage[];

  intervaloId: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
    this.intervaloId = setInterval(() => {

      this.createHeart()
    }, 50)

  }

  ngOnDestroy(): void {
    clearInterval(this.intervaloId)

  }

  createHeart(): void {
    const heart = this.renderer.createElement('div');
    this.renderer.addClass(heart, 'heart');

    this.renderer.setStyle(heart, 'left', Math.random() * 500 + 'vw');
    this.renderer.setStyle(heart, 'animationDuration', Math.random() * 2 + 5 + 's');

    heart.innerText = '❤️';

    this.renderer.appendChild(this.el.nativeElement, heart);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, heart);
    }, 5000);
  }

}



