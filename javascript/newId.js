
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

// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
//     단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

//     1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
// 예를 들어, new_id 값이 "...!@BaT#*..y.abcdefghijklm" 라면, 위 7단계를 거치고 나면 new_id는 아래와 같이 변경됩니다.

// 1단계 대문자 'B'와 'T'가 소문자 'b'와 't'로 바뀌었습니다.
// "...!@BaT#*..y.abcdefghijklm" → "...!@bat#*..y.abcdefghijklm"

// 2단계 '!', '@', '#', '*' 문자가 제거되었습니다.
// "...!@bat#*..y.abcdefghijklm" → "...bat..y.abcdefghijklm"

// 3단계 '...'와 '..' 가 '.'로 바뀌었습니다.
// "...bat..y.abcdefghijklm" → ".bat.y.abcdefghijklm"

// 4단계 아이디의 처음에 위치한 '.'가 제거되었습니다.
// ".bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

// 5단계 아이디가 빈 문자열이 아니므로 변화가 없습니다.
// "bat.y.abcdefghijklm" → "bat.y.abcdefghijklm"

// 6단계 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거되었습니다.
// "bat.y.abcdefghijklm" → "bat.y.abcdefghi"

// 7단계 아이디의 길이가 2자 이하가 아니므로 변화가 없습니다.
// "bat.y.abcdefghi" → "bat.y.abcdefghi"

// 따라서 신규 유저가 입력한 new_id가 "...!@BaT#*..y.abcdefghijklm"일 때, 네오의 프로그램이 추천하는 새로운 아이디는 "bat.y.abcdefghi" 입니다.

// [문제]
// 신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

// [제한사항]
// new_id는 길이 1 이상 1, 000 이하인 문자열입니다.
// new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
// new_id에 나타날 수 있는 특수문자는 - _.~!@#$%^&* ()=+[{]}:?,<>/ 로 한정됩니다.

//     [입출력 예]
//     no	new_id	result
//     예1	"...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
//     예2	"z-+.^."	"z--"
//     예3	"=.="	"aaa"
//     예4	"123_.def"	"123_.def"
//     예5	"abcdefghijklmn.p"	"abcdefghijklmn"
//     입출력 예에 대한 설명
//     입출력 예 #1
//     문제의 예시와 같습니다.

//     입출력 예 #2
//     7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

//     1단계 변화 없습니다.
//     2단계 "z-+.^." → "z-.."
//     3단계 "z-.." → "z-."
//     4단계 "z-." → "z-"
//     5단계 변화 없습니다.
//     6단계 변화 없습니다.
//     7단계 "z-" → "z--"

//     입출력 예 #3
//     7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

//     1단계 변화 없습니다.
//     2단계 "=.=" → "."
//     3단계 변화 없습니다.
//     4단계 "." → "" (new_id가 빈 문자열이 되었습니다.)
//     5단계 "" → "a"
//     6단계 변화 없습니다.
//     7단계 "a" → "aaa"

//     입출력 예 #4
//     1단계에서 7단계까지 거치는 동안 new_id("123_.def")는 변하지 않습니다. 즉, new_id가 처음부터 카카오의 아이디 규칙에 맞습니다.

//     입출력 예 #5
//     1단계 변화 없습니다.
//     2단계 변화 없습니다.
//     3단계 변화 없습니다.
//     4단계 변화 없습니다.
//     5단계 변화 없습니다.
//     6단계 "abcdefghijklmn.p" → "abcdefghijklmn." → "abcdefghijklmn"
//     7단계 변화 없습니다.

