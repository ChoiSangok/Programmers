function solution(numbers) {
    const arr = numbers.map(number => String(number));

    arr.sort((a, b) => (b + a).localeCompare(a + b));

    if (arr[0] === "0") {
        return "0";
    }

    return arr.join('');
}

const num1 = [3, 30, 34, 5, 9];
console.log(solution(num1));