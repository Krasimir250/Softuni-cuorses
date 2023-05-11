function stringLength(str1, str2, str3) {
  const strLength = str1.length + str2.length + str3.length;
  const average = Math.floor(strLength / 3);

  console.log(strLength);
  console.log(average);
}

stringLength("chocolate", "ice cream", "cake");
