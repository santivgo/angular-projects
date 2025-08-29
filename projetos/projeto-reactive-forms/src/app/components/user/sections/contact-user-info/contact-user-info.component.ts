import { Component, Input } from '@angular/core';
import { IUser } from '../../../../interfaces/user/user.interface';

@Component({
  selector: 'app-contact-user-info',
  standalone: false,
  templateUrl: './contact-user-info.component.html',
  styleUrl: './contact-user-info.component.sass'
})
export class ContactUserInfoComponent {
  @Input({ 'required': true }) user!: IUser
}
