import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilianStates.service';
import { IState } from '../interfaces/state.interface';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {
  constructor(private readonly _stateService: BrazilianStatesService){}

  transform(stateId: number): string {
    let state: IState | undefined = {} as IState

    this._stateService.getStates().subscribe((stateList)=> {
      state = stateList.find((stateObj)=> stateObj.id === stateId)
    })

    if (state != undefined){
      return state.descricaoContraida
    }

    return ''
    
    // return null;
  }

}
