Button1.onclick = function() {
  // User's letter grade

  let grade = prompt("Enter your letter grade using a capital letter.")
  let name = prompt("Enter your first name: ")

  // Give user feedback on grade

  switch (grade) {
  case "Z":
    alert("Case of Z")
    break
  case "A":
    alert`${name} Good Job`)
    break
  case "B":
    alert("Pretty Good Job")
    break
  case "C":
    alert("Passed")
    break
  case "D":
    alert("Not so good")
    break;
  case "F":
    alert("Whoops, failed")
    break
  default:
    alert("Uh oh")
    break
  }
}