import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    MatTableModule, MatButtonModule,
  ],
  exports: [
    MatButtonModule, MatTableModule, MatIconModule
  ]
})
export class AngularMaterialModule { }
