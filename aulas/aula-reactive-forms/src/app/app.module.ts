import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group.component';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array.component';
import { FormArrayComGroupComponent } from './EXEMPLOS/form-array-com-group/form-array-com-group.component';
import { FormBuilderComponent } from './EXEMPLOS/form-builder/form-builder.component';
import { FormBuilderExternoComponent } from './EXEMPLOS/form-builder-externo/form-builder-externo.component';
import { MarkAsTouchedComponent } from './EXEMPLOS/mark-as-touched/mark-as-touched.component';
import { FormComChamadaHttpComponent } from './EXEMPLOS/form-com-chamada-http/form-com-chamada-http.component';
import { CrossValidatorComponent } from './EXEMPLOS/cross-validator/cross-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroupComponent,
    FormBuilderComponent,
    FormBuilderExternoComponent,
    MarkAsTouchedComponent,
    FormComChamadaHttpComponent,
    CrossValidatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
