export function getVisibleNumbers(currentPage: number, totalPages: number): number[] {
    const steps = 4;

    return currentPage <= 3
        ? generateNumbers(1, 1 + steps)
        : currentPage >= totalPages - 2
            ? generateNumbers(totalPages - steps, totalPages)
            : generateNumbers(currentPage - (steps / 2), currentPage + (steps / 2));
}

function generateNumbers(start: number, end: number): number[] {
    const numbers: number[] = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}