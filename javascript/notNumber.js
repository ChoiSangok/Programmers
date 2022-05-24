function solution(numbers) {

    let answer = 45;
    let totalarr = 0;
    
    numbers.forEach(el => {
        totalarr += el;
    });

    return answer - totalarr;
}


let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

solution(numbers)
// numbers	result
// [1, 2, 3, 4, 6, 7, 8, 0]	14
// [5, 8, 4, 0, 6, 7, 9]	6


// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.