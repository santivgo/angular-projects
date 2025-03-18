import { IEndereco } from "./endereco";
import { IStatus } from "./status";

export interface IUser {
    nome: string,
    email: string,
    senha: string,
    idade: number,
    endereco: IEndereco,
    telefone: string,
    ativo: boolean,
    funcao: string,
    dataCadastro: string,
    status: IStatus
}