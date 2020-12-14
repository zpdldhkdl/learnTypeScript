const sum = (x: number, y: number): number => {
    return x + y;
};

const sumArray = (numbers: number[]): number => {
    return numbers.reduce((acc, current) => acc + current, 0);
};

const returnNothing = (): void => {
    console.log('hello world');
}

console.log(sum(1, 2));

console.log(sumArray([1, 2, 3, 4]));

returnNothing();
