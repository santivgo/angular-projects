import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [],
  imports: [
    MatTableModule, MatButtonModule, MatCardModule, MatDividerModule
  ],
  exports: [
    MatButtonModule, MatTableModule, MatCardModule, MatDividerModule
  ]
})
export class AngularMaterialModule { }
