function solve(str) {
  const workArr = str.split("\\");
  const infoForFile = workArr[workArr.length - 1];
  const splitInfo = infoForFile.split(".");
  const extension = splitInfo[splitInfo.length - 1];
  splitInfo.pop();
  const fileName = splitInfo.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

solve("C:\\Internal\\training-internal\\Template.krasi.pptx");
