import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // cria um serviço que roda globalmente um item
  private numero: number = 0;
  constructor(private readonly _cliente: HttpClient) { }

  getData(){
    this._cliente
      .get<{ name: string }>(
        `https://swapi.dev/api/people/${id}/`
      ).pipe()
      .subscribe((resp) => (this.personagem_nome = resp.name));
}

}
