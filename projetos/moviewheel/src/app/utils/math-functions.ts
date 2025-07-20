export function toRad(deg: number): number {
    return deg * (Math.PI / 180.0);
}

export function randomRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getPercent(input: number, min: number, max: number) {
    return (((input - min) * 100) / (max - min)) / 100
}
