import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { CardContentDirective } from './components/card/directives/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderDirective,
    CardContentDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
