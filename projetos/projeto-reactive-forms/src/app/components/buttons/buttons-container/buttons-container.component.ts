import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  standalone: false,
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.sass'
})
export class ButtonsContainerComponent {

  @Input({ required: true, alias: 'isInEditMode' }) editMode: boolean = false;
  @Input({ required: true, alias: 'formValidity' }) isFormValid: boolean = false;

  @Output() onEditBtnEmitt: EventEmitter<void> = new EventEmitter<void>()
  @Output() onCancelBtnEmitt: EventEmitter<void> = new EventEmitter<void>()

  setEditMode(): void {
    this.editMode = true
    this.onEditBtnEmitt.emit()
  }
  disableEditMode(): void {
    this.editMode = false
    this.onCancelBtnEmitt.emit()
  }
}
