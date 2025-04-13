import { Component, Input } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { NgFor, KeyValuePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NamePipe } from '../../pipes/name.pipe';
import { GenderPipe } from '../../pipes/gender.pipe';
import { EmployedPipe } from '../../pipes/employed.pipe';
import { PublisherPipe } from '../../pipes/publisher.pipe';



@Component({
  selector: 'app-hero-dummy',
  imports: [NgFor, KeyValuePipe, MatDividerModule, NamePipe, GenderPipe, EmployedPipe, PublisherPipe],
  templateUrl: './hero-dummy.component.html',
  styleUrl: './hero-dummy.component.sass'
})
export class HeroDummyComponent {
  @Input({ required: true })
  hero: IHero = {} as IHero


}
