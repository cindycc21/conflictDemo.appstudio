// User's letter grade

let grade = prompt("Enter your letter grade using a capital letter.");

// Give user feedback on grade

switch (grade) {
case "A":
  alert("Good Job");
  break;
case "B":
  alert("Pretty Good Job");
  break;
case "C":
  alert("Passed");
  break;
case "D":
  alert("Not so good");
  break;
case "F":
  alert("Whoops, failed");
  break;
default:
  alert("Uh oh");
  break;
}