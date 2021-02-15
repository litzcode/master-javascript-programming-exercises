// Write your function here

function getNthElementOfProperty (obj, key, position) {
    return obj.key[position];
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2