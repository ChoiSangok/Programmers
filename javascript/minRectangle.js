function solution(sizes) {

    let lower = [];
    let maxvalue = Math.max.apply(null, sizes.flat())

    sizes.map(([a, b]) => {
        if (a >= b) {
            lower.push(b)
        } else if (a < b) {
            lower.push(a)
        }
    })
    return maxvalue * Math.max.apply(null, lower);
}

solution([[14, 15], [19, 6], [6, 16], [21, 18], [7, 11]])

// 코딩테스트 연습 > 위클리 챌린지 > 최소직사각형 > 다른 사람의 풀이
