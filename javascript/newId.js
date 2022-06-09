
function solution(new_id) {
    
    let answer = new_id.toLowerCase().replace(/[^\w-._]+/g, '').replace(/\.{2,}/g, '.').replace(/(^\.)|(\.$)/g, "");
    if (!answer) answer = "a"

    answer = answer.length > 15 ? answer.substr(0, 15).replace(/\.$/, '') : answer
    if(answer.length <= 2)  answer = answer.padEnd(3, answer[answer.length - 1])

    console.log(answer)
    return answer;
    
}

solution("...!@BaT#*..y.abcdefghijklm.")
// solution("123_.def")
// solution("=.=")
