import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { FocusSecondDirective } from './directives/focus-second.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    HighlightDirective,
    ComDiretivaComponent,
    DisabledDirective,
    StyleDirective,
    ListenerDirective,
    InputBackgroundDirective,
    FocusSecondDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
