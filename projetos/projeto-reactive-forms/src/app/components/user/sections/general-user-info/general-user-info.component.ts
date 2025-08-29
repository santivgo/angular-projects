import { Component, Input } from '@angular/core';
import { IUser } from '../../../../interfaces/user/user.interface';

@Component({
  selector: 'app-general-user-info',
  standalone: false,
  templateUrl: './general-user-info.component.html',
  styleUrl: './general-user-info.component.sass'
})
export class GeneralUserInfoComponent {

  @Input({ required: true }) user!: IUser;
}
