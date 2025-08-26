import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularMaterialModule
  ],
  providers: [provideHttpClient(), { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
