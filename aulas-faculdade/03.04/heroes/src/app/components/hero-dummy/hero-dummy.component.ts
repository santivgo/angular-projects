import { Component, Input } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { NgFor, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-hero-dummy',
  imports: [NgFor, KeyValuePipe],
  templateUrl: './hero-dummy.component.html',
  styleUrl: './hero-dummy.component.sass'
})
export class HeroDummyComponent {
  @Input({ required: true })
  hero: IHero = {} as IHero


}
