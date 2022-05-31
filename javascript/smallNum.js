function solution(arr) {
    var answer = [];
    let index = 0;
    let str ="";
    let min = arr[0];

    if( arr.length === 1 || arr.length === 0 ){
        return [-1];
    }
    
    for( let i =0;i<arr.length;i++){
        if( arr[i] <= min){
            min = arr[i];
            index =i;
        }
    }
    
    str = arr.splice(index,1);
    console.log(arr);
    return arr;

}


console.log(solution([1,3,2,5]));
