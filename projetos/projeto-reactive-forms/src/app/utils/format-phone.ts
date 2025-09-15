import { IPhone } from "../interfaces/user/phone.interface";

export function formatPhone(phone: IPhone): string {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
}