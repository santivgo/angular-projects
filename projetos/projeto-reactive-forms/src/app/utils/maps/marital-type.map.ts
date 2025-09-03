import { MaritalStatusEnum } from "../../enums/marital-status.enum";

export const MaritalStatusMap: { [key: number]: string } = {
    [MaritalStatusEnum.SOLTEIRO]: 'Solteiro',
    [MaritalStatusEnum.CASADO]: 'Casado',
    [MaritalStatusEnum.DIVORCIADO]: 'Divorciado'
}