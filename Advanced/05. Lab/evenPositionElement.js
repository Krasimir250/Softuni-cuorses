function evenPositionElement(arr) {
  let outputArr = [];
  arr.forEach((element, index) => {
    if (index % 2 === 0) {
      outputArr.push(element);
    }
  });
  console.log(outputArr.join(" "));
}

evenPositionElement(["20", "30", "40", "50", "60"]);
