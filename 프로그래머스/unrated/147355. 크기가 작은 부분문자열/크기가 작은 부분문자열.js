function solution(t, p) {

    let count = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        if (parseInt(t.substring(i, i + p.length)) <= parseInt(p)) {
            count++;
        }
    }
    console.log(count);

    return count;
}
