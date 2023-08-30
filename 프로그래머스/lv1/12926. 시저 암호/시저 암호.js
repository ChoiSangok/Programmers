function solution(s, n) {

    let strArr = s.split("");

    console.log(strArr)

    let result = strArr.map(char => {
        let ascii = char.charCodeAt(0);

        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            let isUpperCase = (ascii >= 65 && ascii <= 90);
            let start = isUpperCase ? 65 : 97;
            let end = isUpperCase ? 90 : 122;

            let rotate = ascii + n;
            if (rotate > end) rotate = start + (rotate - end - 1);

            return String.fromCharCode(rotate);
        } else {
            return ' ';
        }
    })

    console.log(result.join(''))
    return result.join('');
}


solution("a B z", 4)
