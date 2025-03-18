import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    MatTableModule, MatButtonModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatTableModule, MatCardModule
  ]
})
export class AngularMaterialModule { }
