import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideTheming, themingInitializer } from '@fundamental-ngx/core/theming';
import { RouterModule } from '@angular/router';
import { FundamentalModule } from './fundamental/fundamental.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FundamentalModule
  ],
  providers: [
    provideTheming({ defaultTheme: 'sap_horizon_dark', changeThemeOnQueryParamChange: true }),
    themingInitializer()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
