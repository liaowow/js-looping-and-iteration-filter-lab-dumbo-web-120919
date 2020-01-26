// Code your solution in this file
function findMatching(arr, name) {
    let str = name.toLowerCase();

    return arr.filter(function (element) {return element.toLowerCase() === str});
}

function fuzzyMatch(arr, str) {
    return arr.filter(function (element) {
        return element.slice(0, str.length) === str;
    });
}

function matchName (arr, str) {
    return arr.filter(function (obj) {return obj['name'] === str});
}