import { IColor } from "./color.interface"
import { IWheelItem } from "./wheel-item.interface"

export interface ICanvas {
    ctx: CanvasRenderingContext2D | null
    width: number,
    height: number,
    centerX: number,
    centerY: number,
    radius: number,
    items: IWheelItem[],
    currentDeg: number,
    step: number,
    colors: IColor[],
    speed: number,
    pause: boolean,
    maxRotation: number,
    winner: IWheelItem | undefined,
}