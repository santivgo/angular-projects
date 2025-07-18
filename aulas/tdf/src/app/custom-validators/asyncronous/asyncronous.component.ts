import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { UserExistsDirective } from './user-exists.directive';

@Component({
  selector: 'app-asyncronous',
  imports: [FormsModule, CommonModule, UserExistsDirective],
  templateUrl: './asyncronous.component.html',
  styleUrl: './asyncronous.component.sass'
})
export class AsyncronousComponent {

}
