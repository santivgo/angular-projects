import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    MatTableModule, MatNativeDateModule, MatButtonModule, MatCardModule, MatDividerModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatNativeDateModule, MatTableModule, MatCardModule, MatDividerModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatInputModule
  ]
})
export class AngularMaterialModule { }
