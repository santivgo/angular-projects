import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-confirmation-saved',
  standalone: false,
  templateUrl: './user-confirmation-saved.component.html',
  styleUrl: './user-confirmation-saved.component.sass'
})
export class UserConfirmationSavedComponent {
  constructor(private dialogRef: MatDialogRef<UserConfirmationSavedComponent>) {
    dialogRef.disableClose = true;
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);

  }

}
