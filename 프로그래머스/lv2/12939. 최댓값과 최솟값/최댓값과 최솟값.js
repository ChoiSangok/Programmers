function solution(s) {

    let str = s.split(" ");
    let max = Math.max.apply(null, str);
    let min = Math.min.apply(null, str);

    return min + " " + max;
}

console.log(solution("-1 -1"));