/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

solution=12;
for (var fact=1 ; fact<12 ; fact++){
  solution = solution*fact;
  }
console.log(solution);

// Another Solution

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);