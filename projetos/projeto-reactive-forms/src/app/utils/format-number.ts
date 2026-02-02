export function formatNumber(number: string) {
    return number.slice(0, -4) + '-' + number.slice(-4)
}