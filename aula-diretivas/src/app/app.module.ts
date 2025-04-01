import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { DisabledDirective } from './directives/disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    HighlightDirective,
    ComDiretivaComponent,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
