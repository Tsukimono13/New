function getLength(arr) {

    return arr.length;
}

function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}

function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1];
}

function pushElement(arr) {
    var el = 1;
    //push el to arr
    var push = arr.push(el);
    return arr;
}

function popElement(arr) {
    //pop an element from arr
    const pop = arr.pop();
    return arr;
} 