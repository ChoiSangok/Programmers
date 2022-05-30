function solution(absolutes, signs) { 

    let sum = 0;

    for (let i = 0; i < absolutes.length; i++){
        if(signs[i] === true) {
            sum = sum + absolutes[i]
        } else {
            sum = sum - absolutes[i];
        }
    }

    console.log(sum)
    return sum;
}
    // let sum = 0 ; 
    // const result = keys.reduce((acc, curr, idx) => {
    //     return { ...acc, [curr]: values[idx] };
    // }, new Object);


    // for (let k in result) {
    //     if(result[k] === false) {
    //         k = -Number(k)
    //     }
    //     k = Number(k)
    //     sum += Number(k)
    // }
    // console.log(sum)
    // return sum;


solution([4, 7, 12], [true, false, true])


// absolutes	signs	result
// [4, 7, 12][true, false, true]	9
// [1, 2, 3][false, false, true]	0
// 입출력 예 설명
// 입출력 예 #1

// signs가[true, false, true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가[false, false, true] 이므로, 실제 수들의 값은 각각 - 1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.