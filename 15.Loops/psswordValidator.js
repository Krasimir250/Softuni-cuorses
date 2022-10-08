function solve(pass) {
  let numFromPass = 0;
  let letterFromPass = 0;
  let error = false;
  if (pass.length < 6 || pass.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    error = true;
  }

  const arr = pass.split("");

  arr.forEach((element) => {
    const code = element.charCodeAt(0);

    if (code >= 48 && code <= 57) {
      numFromPass++;
    }

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      letterFromPass++;
    }
  });

  if (pass.length !== letterFromPass + numFromPass) {
    console.log("Password must consist only of letters and digits");
    error = true;
  }

  if (numFromPass < 2) {
    console.log("Password must have at least 2 digits");
    error = true;
  }

  if (error === false) {
    console.log("Password is valid");
  }
}

solve("MyPass123");
