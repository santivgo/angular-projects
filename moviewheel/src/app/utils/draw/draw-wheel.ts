import { ElementRef } from "@angular/core";
import { ICanvas } from "../../interfaces/canvas.interface";
import { IWheelItem } from "../../interfaces/wheel-item.interface";
import { getPercent, randomRange, toRad } from "../math-functions";
import { getRandomColors } from "../random-color";
import { easeOutSine } from "../animation/easeOutSin";

export function createWheel(canvas: ICanvas) {
    draw(canvas)
}


export function circleCanvas(canvasEl: ElementRef<HTMLCanvasElement>, finalList: IWheelItem[]): ICanvas {
    return {
        'ctx': canvasEl.nativeElement.getContext('2d'),
        'width': canvasEl.nativeElement.width,
        'height': canvasEl.nativeElement.height,
        'centerX': canvasEl.nativeElement.width / 2,
        'centerY': canvasEl.nativeElement.height / 2,
        'radius': canvasEl.nativeElement.width / 2,
        'items': finalList,
        'currentDeg': 0,
        'step': 360 / finalList.length,
        'colors': getRandomColors(finalList.length),
        'speed': 0,
        'maxRotation': randomRange(360 * 3, 360 * 6),
        'pause': false,
        'winner': undefined,
    }
}
export function draw(c: ICanvas) { // essa tipagem aqui tem que ver certinho ali nos objetos
    const ctx = c.ctx;

    ctx!.beginPath()
    ctx!.arc(c.centerX, c.centerY, c.radius, toRad(0), toRad(360))
    ctx!.fillStyle = `rgb(${33},${33},${33})`
    ctx!.lineTo(c.centerX, c.centerY)
    ctx!.fill()

    let startDeg = c.currentDeg;

    for (let i = 0; i < c.items.length; i++, startDeg += c.step) {
        let endDeg = startDeg + c.step

        const color = c.colors[i]
        let colorStyle = `rgb(${color.r},${color.g},${color.b})`


        ctx!.beginPath();
        let rad = toRad(360 / c.step);
        ctx!.arc(c.centerX, c.centerY, c.radius - 2, toRad(startDeg), toRad(endDeg))
        let colorStyle2 = `rgb(${color.r - 30},${color.g - 30},${color.b - 30})`
        ctx!.fillStyle = colorStyle2
        ctx!.lineTo(c.centerX, c.centerY);
        ctx!.fill()

        ctx!.beginPath();
        rad = toRad(360 / c.step);
        ctx!.arc(c.centerX, c.centerY, c.radius - 30, toRad(startDeg), toRad(endDeg))
        ctx!.fillStyle = colorStyle
        ctx!.lineTo(c.centerX, c.centerY);
        ctx!.fill()

        //texto
        ctx!.save();
        ctx!.translate(c.centerX, c.centerY);
        ctx!.rotate(toRad((startDeg + endDeg) / 2));
        ctx!.textAlign = "center";
        if (color.r > 150 || color.g > 150 || color.b > 150) {
            ctx!.fillStyle = "#000";
        }
        else {
            ctx!.fillStyle = "#fff";
        }
        ctx!.font = 'bold 24px serif';
        ctx!.fillText(c.items[i].movie, 130, 10);
        ctx!.restore();

        let normStart = (startDeg + 360) % 360;
        let normEnd = (endDeg + 360) % 360;
        let selectionPoint = 360
        if ((normStart <= selectionPoint && normEnd > selectionPoint) ||
            (normStart > normEnd && (selectionPoint >= normStart || selectionPoint < normEnd))) {
            c.winner = c.items[i]

        }
    }
}

const animate = (canvas: ICanvas) => {
    if (canvas.pause) {
        return
    }

    canvas.speed = easeOutSine(getPercent(canvas.currentDeg, canvas.maxRotation, 0)) * 20
    if (canvas.speed < 0.01) {
        canvas.speed = 0
        canvas.pause = true
    }
    canvas.currentDeg += canvas.speed
    draw(canvas)
    window.requestAnimationFrame(() => animate(canvas));
}

export function spin(canvas: ICanvas) {
    if (canvas.speed != 0) {
        return
    }

    canvas.currentDeg = 0
    canvas.maxRotation = randomRange(360 * 3, 360 * 6)
    canvas.pause = false
    window.requestAnimationFrame(() => animate(canvas));
}
