
let registeredUsername = prompt("Register your Username");
let registeredPassword = prompt("Register your passcode");
let reEnteredPassword = prompt("Re-enter your passcode");


if (registeredPassword === reEnteredPassword) {
  alert("Congratulations! You have successfully registered.");

  
  let enteredUsername = prompt("Username: ");


  if (enteredUsername === registeredUsername) {
    let enteredPassword = prompt("Password: ");


    if (enteredPassword === registeredPassword) {
      alert("Welcome to DSA, " + enteredUsername);
    } else {
      alert("Incorrect Password, Re-run the code!");
    }
  } else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
  alert("Password does not Match, Re-run the code!");

