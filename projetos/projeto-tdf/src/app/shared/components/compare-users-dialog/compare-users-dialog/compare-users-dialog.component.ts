import { Component, inject, Input, model } from '@angular/core';
import { IUser } from '../../../../core/interfaces/user.interface';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from "@angular/material/divider";
import { CommonModule } from '@angular/common';
import { StatePipe } from '../../../../core/pipes/state.pipe';
import { FavoriteSongPipe } from '../../../../core/pipes/favorite-song.pipe';
import { GenrePipe } from '../../../../core/pipes/genre.pipe';


@Component({
  selector: 'app-compare-users-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDividerModule,
    CommonModule,
    StatePipe,
    FavoriteSongPipe,
    GenrePipe
],
  templateUrl: './compare-users-dialog.component.html',
  styleUrl: './compare-users-dialog.component.sass'
})
export class CompareUsersDialogComponent {

  readonly dialogRef = inject(MatDialogRef<CompareUsersDialogComponent>);
  readonly data = inject<{originalUser: IUser, alteredUser: IUser}>(MAT_DIALOG_DATA);
  readonly originalUser: IUser = this.data.originalUser;
  readonly alteredUser: IUser = this.data.alteredUser;


  

}
