export function textClean(text) {
    return `${text[0].toUpperCase()}${text.substring(1)}`.trim()
}
