function solve(arr) {
  const allGames = arr[0].split(" ");

  for (let i = 1; i < arr.length; i++) {
    const command = arr[i].split(" ")[0];
    const argument = arr[i].split(" ")[1];

    switch (command) {
      case "Install":
        if (!allGames.includes(argument)) {
          allGames.push(argument);
        }
        break;

      case "Uninstall":
        const index = allGames.indexOf(argument);
        if (index > -1) {
          allGames.splice(index, 1);
        }
        break;

      case "Update":
        const updateIndex = allGames.indexOf(argument);
        if (updateIndex > -1) {
          const element = allGames.splice(updateIndex, 1);
          allGames.push(element);
        }
        break;

      case "Expansion":
        const game = argument.split("-")[0];
        const expansion = argument.split("-")[1];

        const expansionIndex = allGames.indexOf(game);

        if (expansionIndex > -1) {
          allGames.splice(expansionIndex, 1, game, `${game}:${expansion}`);
        }
        break;

      case "Play!":
        console.log(allGames.join(" "));
        break;

      default:
        break;
    }
  }
}

solve([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);
