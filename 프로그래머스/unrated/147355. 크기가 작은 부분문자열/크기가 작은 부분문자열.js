function lowerString(t, p) {

    let arr = [];
    let count = 0;

    for (i = 0; i < t.length; i++) {

        let subStr = t.substring(i, p.length + i);
        subStr.length === p.length ? arr.push(subStr) : ''
    }

    arr.map(arr => {
        arr < p ? count += 1 : 0
    })

    return count;
}

lowerString("3141592", "271");