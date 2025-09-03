import { PhoneTypeEnum } from "../../enums/phone-type.enum";

export const PhoneTypeMap: { [key: number]: string } = {
    [PhoneTypeEnum.CELULAR]: 'Celular',
    [PhoneTypeEnum.EMERGENCIA]: 'Emergência',
    [PhoneTypeEnum.RESIDENCIAL]: 'Residencial',
} as const