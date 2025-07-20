import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../interfaces/user.interface';
import { StatusPipe } from './status.pipe';

@Pipe({
  name: 'imgStatus'
})
export class ImgStatusPipe implements PipeTransform {

  transform(value: STATUS): string {
    const iconList: {[key:number]: string} = {1: 'assets/icons/active-icon.png', 2: "assets/icons/inactive-icon.png"}
    return iconList[value]
  }

}
