function solve(percent) {
  let progress = Math.floor(percent / 10);

  if (percent === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    console.log(
      `${progress * 10}% [${"%".repeat(progress)}${".".repeat(10 - progress)}]`
    );

    console.log("Still loading...");
  }
}

solve(100);
