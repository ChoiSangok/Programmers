function solution(array, commands) {
    var answer = [];

    for(let i=0; i<commands.length; i++){
        //slice sort 저장
        var commandslice = array.slice(commands[i][0]-1,commands[i][1]);
        // solution(array, commands).sort();
        commandslice.sort( (a, b) => { return a-b });
        answer.push(commandslice[commands[i][2]-1]);
    }
    return answer;
}


console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
