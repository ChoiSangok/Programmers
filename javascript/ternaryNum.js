function solution(n) {
    //3진법 바꾸고  reverse()
    var answer=n.toString(3).split("").reverse().join("");

    var result = Number.parseInt(answer,3);

    console.log(result);

    return result;
}

console.log(solution(125));
