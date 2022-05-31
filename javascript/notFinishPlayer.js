function solution(participant, completion) {

    var answer="";

    participant.sort();
    console.log(participant);
    completion.sort();
    console.log(completion);

    for( let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

console.log(solution(["mislav", "stanko", "mislav", "ana"]	, ["stanko", "ana", "mislav"]));
