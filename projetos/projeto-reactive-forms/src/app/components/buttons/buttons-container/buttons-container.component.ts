import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserConfirmationUnsavedComponent } from '../../modal/user-confirmation-unsaved/user-confirmation-unsaved.component';
import { take } from 'rxjs';
import { UserConfirmationSavedComponent } from '../../modal/user-confirmation-saved/user-confirmation-saved.component';

@Component({
  selector: 'app-buttons-container',
  standalone: false,
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.sass'
})
export class ButtonsContainerComponent {

  @Input({ required: true, alias: 'isInEditMode' }) editMode: boolean = false;
  @Input({ required: true, alias: 'formValidity' }) isFormValid: boolean = false;
  @Input({ required: true, alias: 'formDirty' }) isFormDirty: boolean = false;
  @Output() onEditBtnEmitt: EventEmitter<void> = new EventEmitter<void>()
  @Output() onCancelBtnEmitt: EventEmitter<void> = new EventEmitter<void>()
  @Output() onSaveBtnEmitt: EventEmitter<void> = new EventEmitter<void>()


  readonly dialog = inject(MatDialog);

  setEditMode(): void {
    this.editMode = true
    this.onEditBtnEmitt.emit()
  }

  saveInfo(): void {
    const dialogRef = this.dialog.open(UserConfirmationSavedComponent)
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(result)
      this.editMode = !result
      this.onSaveBtnEmitt.emit()
    });
  }
  disableEditMode(): void {
    if (this.isFormDirty) {
      const dialogRef = this.dialog.open(UserConfirmationUnsavedComponent)
      dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
        this.editMode = !result
        if (!this.editMode) {
          this.onCancelBtnEmitt.emit()
        }
      });

    } else {
      this.editMode = false
      this.onCancelBtnEmitt.emit()
    }

  }
}
