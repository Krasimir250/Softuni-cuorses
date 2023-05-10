function solve(input) {
  const [str, type] = input;
  const textArr = str.split("");
  let count = 0;

  function sumCharCodes(num1, num2) {
    textArr.forEach((e) => {
      const code = e.charCodeAt(0);
      if (code >= num1 && code <= num2) {
        count += Number(code);
      }
    });
  }

  if (type === "LOWERCASE") {
    sumCharCodes(97, 122);
  } else if (type === "UPPERCASE") {
    sumCharCodes(65, 90);
  }

  console.log(`The total sum is: ${count}`);
}

solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
