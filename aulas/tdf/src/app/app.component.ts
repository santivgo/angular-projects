import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  title = 'tdf';

  @ViewChild('meuForm') meuForm!: NgModel;

  valid(): void {
    if (this.meuForm.valid){
      console.log('valido')
      return 
    }
    console.log('invalido')
  }
  
}
