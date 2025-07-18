import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AsyncronousComponent } from "./custom-validators/asyncronous/asyncronous.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncronousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{

}
