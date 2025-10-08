import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-confirmation-unsaved',
  standalone: false,
  templateUrl: './user-confirmation-unsaved.component.html',
  styleUrl: './user-confirmation-unsaved.component.sass'
})
export class UserConfirmationUnsavedComponent {
  constructor(private dialogRef: MatDialogRef<UserConfirmationUnsavedComponent>) {
    dialogRef.disableClose = true;
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);

  }
}
