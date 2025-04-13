export function randomColor(): { r: number, g: number, b: number } {
    const r: number = Math.floor(Math.random() * 255)
    const g: number = Math.floor(Math.random() * 255)
    const b: number = Math.floor(Math.random() * 255)
    return { r, g, b }

}