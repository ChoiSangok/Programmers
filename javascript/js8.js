function solution(numbers) {
    var answer = [];
    let ary = [];
    
    for(let i=0;i<numbers.length-1; i++){
        for( let j=i+1;j<numbers.length; j++){
            answer = numbers[i] + numbers[j];
            if(ary.indexOf(answer === -1)){
                ary.push(answer);
            } 
        }
    }
    
    let sortup = ary.sort((a,b) =>{
        return a-b;
    })
    let result = sortup.filter( ( data, idx, array) => {
        return array.indexOf( data ) === idx;
    })
    return result;

}
console.log(solution([7,8,5,6,3]));
