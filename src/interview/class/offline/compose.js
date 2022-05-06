function toUpperCase(str) {
    return str.toUpperCase();
}

function addExclMark(str) {
    return str + '!';
}

function repeat3(str) {
    return str.repeat(3);
}

const res = repeat3(addExclMark(toUpperCase('Hello')));
console.log(res)

function compose(...funcs) {
    return function (x) {
        return funcs.reduceRight((acc, fn) => fn(acc), x);
    }
}

const toUpAddExclAND3 = compose(repeat3, addExclMark, toUpperCase);

console.log(toUpAddExclAND3('yo'))


// seven(plus(one())) -> 8

function one(arg) {
    if (typeof arg === 'function') {
        return arg(1);
    }
    return 1;
}

function seven(arg) {
    if (typeof arg === 'function') {
        return arg(7);
    }
    return 7;
}

function plus(arg) {
    return function (a) {
        return arg + a;
    }
}

console.log(seven(plus(one())))
console.log(one(plus(seven())))
