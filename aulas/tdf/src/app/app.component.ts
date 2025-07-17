import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SyncronousComponent } from "./custom-validators/syncronous/syncronous.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SyncronousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  inputs: {'name': string} = {} as {'name': string };
  onSubmit(form: NgForm){
    console.log(form)
  }
}
