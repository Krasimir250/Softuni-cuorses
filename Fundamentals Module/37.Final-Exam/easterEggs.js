function solve(arr) {
  const str = arr[0];
  const regex = /[\@|\#]+(?<color>[a-z]{3,})[\@|\#]+[^\w\d]+(?<count>\d+)\//gm;

  const matches = str.match(regex);

  matches.forEach((strMatch) => {
    const secondRegex =
      /[\@|\#]+(?<color>[a-z]{3,})[\@|\#]+[^\w\d]+(?<count>\d+)\//gm;
    const groupsMatch = secondRegex.exec(strMatch);
    if (groupsMatch) {
      const groups = groupsMatch.groups;
      console.log(`You found ${groups.count} ${groups.color} eggs!`);
    }
  });
}

solve([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
