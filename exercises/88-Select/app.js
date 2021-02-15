// Write your function here

function select (arr, obj) {
    let newObj = {};
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<Object.keys(obj).length; j++) {
            if (arr[i] == Object.keys(obj)[j]){
                newObj[arr[i]] = obj[Object.keys(obj)[j]];
            }   
        }  
    }
    return newObj;
    
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

//console.log(arr[0]);

/*let newObj = {};
newObj[arr[0]] = 2;
console.log(newObj);*/


/*function addProperty(obj, key) {
  // your code here
  obj[key]=true;
  return obj;
}


var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);

Write a function called "addProperty".

/*Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
Then, the function must return the object.

```Javascript
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

