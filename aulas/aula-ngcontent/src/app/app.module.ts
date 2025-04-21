import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideTheming, themingInitializer } from '@fundamental-ngx/core/theming';
import { RouterModule } from '@angular/router';
import { FundamentalModule } from './fundamental/fundamental.module';
import { CardHeaderDirective } from './directives/card-header.directive';
import { CardContentDirective } from './directives/card-content.directive';
import { CardMainTextDirective } from './directives/card-main-text.directive';
import { CardSubtitleTextDirective } from './directives/card-subtitle-text.directive';
import { CardContentTextDirective } from './directives/card-content-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContentDirective,
    CardMainTextDirective,
    CardSubtitleTextDirective,
    CardContentTextDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FundamentalModule,
    CardHeaderDirective
  ],
  providers: [
    provideTheming({ defaultTheme: 'sap_horizon_dark', changeThemeOnQueryParamChange: true }),
    themingInitializer()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
