import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.sass'
})
export class UserCardComponent {
  @Input({required: true}) user: IUser = {} as IUser
  @Output() emitter: EventEmitter<IUser> = new EventEmitter()
  
  emitUser(){
    this.emitter.emit(this.user)
  }

}
