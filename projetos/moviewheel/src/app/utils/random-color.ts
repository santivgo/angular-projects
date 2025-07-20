import { IColor } from "../interfaces/color.interface"

function randomColor(): IColor {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return { r, g, b }
}

export function getRandomColors(count: number): IColor[] {
    const colorsArray: IColor[] = []

    for (let index = 0; index < count; index++) {
        colorsArray[index] = randomColor()
    }
    return colorsArray;
}