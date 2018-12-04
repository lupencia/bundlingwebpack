export function getAvg(colors) {
    return getTotalScore(colors) / colors.length;
}

function getTotalScore(colors) {
    return colors.reduce((colors, count) => colors + count);
}