function checkAge(name, age) {
  // your code here
  if (age>=21) return "Welcome, "+name+"!";
  else if (age<21) return "Go home, "+name+"!";
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'