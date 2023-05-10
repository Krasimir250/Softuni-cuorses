function solve(arr) {
  let finishSum = arr.shift();

  arr.forEach((element) => {
    let startValue = element;
    let stop = true;
    let lastCommand = false;
    let cuts = 0;
    let lap = 0;
    let grinding = 0;
    let etch = 0;
    let x_ray = 0;

    while (stop) {
      if (element / 4 >= finishSum) {
        element = element / 4;
        Math.floor(element);
        cuts++;

        continue;
      }

      if (element - (20 / 100) * element >= finishSum) {
        element = element - (20 / 100) * element;
        Math.floor(element);
        lap++;

        continue;
      }

      if (element - 20 >= finishSum) {
        element = element - 20;
        Math.floor(element);
        grinding++;
        continue;
      }

      if (element - 2 >= finishSum) {
        element = element - 2;
        Math.floor(element);
        etch++;
        continue;
      }

      if (element < finishSum && lastCommand != true) {
        element = element + 1;
        Math.floor(element);
        lastCommand = true;
        x_ray++;
        continue;
      }

      stop = false;
    }
    console.log(
      `Processing chunk ${startValue} microns
      Cut x${cuts} 
      Transporting and washing 
      Lap x${lap} 
      Transporting and washing 
      Grind x${grinding} 
      Transporting and washing 
      Etch x${etch} 
      Transporting and washing 
      X-ray x${x_ray} 
      Finished crystal ${finishSum} microns`
    );
  });
}

solve([1000, 4000, 8100]);
