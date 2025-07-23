import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), {provide:DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'dd/MM/YYYY', timezone: '-0003'}}, {provide: LOCALE_ID, useValue: 'pt-BR'} ]
};
