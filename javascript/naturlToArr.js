function solution(n) {
    var answer = [];

    let str = String(n).split("");
    
    for( let i= str.length-1; i>=0;i--){
        answer.push(Number(str[i]))
    }
    // for( let i =0; i< n.)
    return answer;
}

console.log(solution(34221));
