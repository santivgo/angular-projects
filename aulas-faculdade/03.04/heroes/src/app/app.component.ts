import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IHero } from './interfaces/hero.interface';
import { secret } from './secret_api';
import { HeroDummyComponent } from './components/hero-dummy/hero-dummy.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ValidheroPipe } from './pipes/validhero.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, HeroDummyComponent, MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, ValidheroPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  inps = new FormGroup({
    id: new FormControl('1', [Validators.required, Validators.pattern('[0-9]+')])
  })

  api_key: string = secret;
  hero: IHero = {} as IHero


  constructor(private client: HttpClient) {

  }

  getHeroes() {
    if (this.inps.controls.id.valid) {
      this.client.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.inps.controls.id.value}.json`).subscribe((ans) => {
        this.hero = ans as IHero
        console.log(this.hero)

      })
    }

  }
}
