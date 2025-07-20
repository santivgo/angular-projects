import { Component } from '@angular/core';
import { Icon } from '../../interfaces/IHeader.interface';

@Component({
  selector: 'app-client-info',
  standalone: false,
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.sass'
})
export class ClientInfoComponent {
  icon = Icon.client
}
