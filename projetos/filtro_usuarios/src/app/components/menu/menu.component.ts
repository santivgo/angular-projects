import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  filterOptions: IFilterOptions = {
    name: undefined,
    endDate: undefined,
    startDate: undefined,
    status: undefined
  }
  filterList = [{ description: 'Ativo', value: true }, { description: 'Inativo', value: false }]

  @Output() filterEmit = new EventEmitter<IFilterOptions>();
  onFilter() {
    this.filterEmit.emit(this.filterOptions);

  }
}
