import { IPhone } from "../interfaces/user/phone.interface";

export function formatPhone(phone: IPhone): string {
    // Remove apenas espaços da máscara para deixar o input limpo
    const internationalCode = phone.internationalCode?.replace(/\D/g, '') || '';
    const areaCode = phone.areaCode?.replace(/\D/g, '') || '';
    const number = phone.number?.replace(/\D/g, '') || '';

    return `${internationalCode}${areaCode}${number}`;
}