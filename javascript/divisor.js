
function solution(left, right) {

    let sum =0;

    for( let i = left ; i <= right; i++ ){
        let num = 1;
        let test = [];

        while (num <= i) {
            if (i % num === 0) test.push(num)
            num += 1;
        }
        test.length % 2 === 0 ? sum += i : sum -=i;
    }
    console.log(sum)

    return sum;
}

solution(24, 27)

// 약수의 개수와 덧셈

