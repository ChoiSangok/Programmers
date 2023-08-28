function solution(number) {
    var answer = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                number[i] + number[j] + number[k] === 0 ? answer++ : 0
            }
        }
    }
    console.log(answer);
    return answer;
}


solution([-2, 3, 0, 2, -5]);