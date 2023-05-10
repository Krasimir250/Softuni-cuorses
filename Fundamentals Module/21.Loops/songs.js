function solve(params) {
  class Song {
    constructor(typeList, name, time) {
      this.type = typeList;
      this.name = name;
      this.time = time;

      if (type === "all" || this.type === type) {
        console.log(this.name);
      }
    }
  }

  const type = params.pop();
  params.shift();
  params.forEach((e) => {
    let [typeList, name, time] = e.split("_");
    new Song(typeList, name, time);
  });
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
