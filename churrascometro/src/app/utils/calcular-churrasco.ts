import { IChurrasco } from "../interfaces/churrasco.interface";
import { IInputForm } from "../interfaces/input-form.interface";

const carnePP = (duracao: number): number => {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

const cervejaPP = (duracao: number): number => {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
const bebidasPP = (duracao: number): number => {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

export const calcular = (form: IInputForm): IChurrasco => {
    const { adultos, criancas, duracaoHrs: duracao } = form;


    return {
        kgCarne: (carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 100,
        qtdCerveja: Math.ceil(cervejaPP(duracao) * adultos / 355),
        qtdBebida: Math.ceil((bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)) / 2000)
    }
}