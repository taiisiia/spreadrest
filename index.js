//spread

//1
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1]

//2
function concat (arr1, arr2) {
    arr3 = [...arr1, ...arr2];
    return arr3;
}

//3
function concatobj (obj1, obj2) {
    obj3 = {...obj1, ...obj2};
    return obj3;
}

//4

//rest

//1
function createArr (...theArgs) {
    return theArgs;
}

//2
function splice (deleteIndex, deleteCount, ...theArgs) {
    return theArgs.map(function(element) {
        return theArgs.splice(deleteIndex)
    }
}