// Write your function here

function keep (array, keeper) {
    let newArray = []
    array.forEach(element => {
        if (element == keeper) newArray.push(element);
    }); 
    return newArray;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]