function solution(answers) {
    var answer = [];
    let math1 = [1,2,3,4,5];
    let math2 = [2,1,2,3,2,4,2,5];
    let math3 = [3,3,1,1,2,2,4,4,5,5];
    let count=[0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === math1[i] ) {
            count[0] += 1;
        }
        if(answers[i] === math2[i] ) {
            count[1] += 1;
        }
        if(answers[i] === math3[i] ) {
            count[2] += 1;
        }
    }

    let max = Math.max.apply(null, count);

    for(let i = 0; i < count.length; i++) {
        if(max === count[i]) {
            answer.push(i+1)
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
