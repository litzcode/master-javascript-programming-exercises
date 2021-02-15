// Write your function here

function addToFrontOfNew (input, num) {
   let newArray = [];
   for (let i=0; i<input.length; i++) {
       newArray.push(input[i]);
   }
   newArray.unshift(num);
   return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]