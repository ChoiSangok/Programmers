function solution(d, budget) {
    var answer = 0;
    let count =0;
    d.sort( (a, b) => {
        return a-b;
    })

    for( let i =0; i<d.length; i++){
        answer += d[i];
        if( answer <= budget){
            count ++;
        }
    }
    console.log(count);
    return count;
}

console.log(solution([1,3,2,5,4],9));
