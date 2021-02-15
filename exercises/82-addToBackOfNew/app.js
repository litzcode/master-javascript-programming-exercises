// Write your function here

function addToBackOfNew (input, num) {
    let newArray = []
    input.forEach(element => {
        newArray.push(element);
    });
    newArray.push(num);
    return newArray
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]