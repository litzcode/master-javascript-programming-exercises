function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18) return true;
  else return false;
}

var output = isOldEnoughToVote(17);
console.log(output);