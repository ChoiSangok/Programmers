function solution(price, money, count) {

    let total = 0;

    for (let i = 0; i < count; i++) {
        total += price + (price * i)
    }
    // 모자란돈 
    let answer = money - total;

    if (money < total) return Math.abs(answer)
    else return 0;
}

solution(1, 20, 4)