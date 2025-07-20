import { Component, Input, TemplateRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-meu-comp',
  standalone: false,
  templateUrl: './meu-comp.component.html',
  styleUrl: './meu-comp.component.sass'
})
export class MeuCompComponent {
  @Input({'required': true})
  header!: TemplateRef<AppComponent>;
    @Input({'required': true})
  content!: TemplateRef<AppComponent>; 
   @Input({'required': true})
  footer!: TemplateRef<AppComponent>; 
}
