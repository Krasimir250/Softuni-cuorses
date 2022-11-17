function solve(params) {
  class Info {
    constructor(town, latitude, longitude) {
      this.city = town;
      this.width = latitude;
      this.long = longitude;

      console.log(
        `{ town: '${this.city}', latitude: '${this.width.toFixed(
          2
        )}', longitude: '${this.long.toFixed(2)}' }`
      );
    }
  }

  params.forEach((e) => {
    let [town, latitude, longitude] = e.split(" | ");

    new Info(town, Number(latitude), Number(longitude));
  });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
