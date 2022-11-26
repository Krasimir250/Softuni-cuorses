function solve(arr) {
  let register = {};

  arr.forEach((line) => {
    if (line.includes(":")) {
      let [courseName, capacity] = line.split(":").map((e) => e.trim());
      capacity = Number(capacity);
      if (!register[courseName]) {
        register[courseName] = { capacity, students: [] };
      } else {
        register[courseName].capacity += capacity;
      }
    } else if (line.includes("with email")) {
      let [user, word, word1, email, word2, course] = line
        .split(" ")
        .map((e) => e.trim());
      let [userName, creditCount] = user.split("[");
      creditCount = creditCount.replace("]", "");

      if (register.hasOwnProperty(course)) {
        if (register[course].capacity > 0) {
          register[course].students.push({
            userName,
            creditCount,
            email,
            courseName: course,
          });
          register[course].capacity -= 1;
        }
      }
    }
  });

  Object.keys(register)
    .sort((a, b) => register[b].students.length - register[a].students.length)
    .map((k) => {
      register[k].students = register[k].students.sort(
        (a, b) => b.creditCount - a.creditCount
      );
      return k;
    })
    .forEach((k) => {
      const { courseName, capacity, students } = {
        courseName: k,
        ...register[k],
      };
      console.log(
        `${courseName}: ${capacity} places left\n${students
          .map((s) => `--- ${s.creditCount}: ${s.userName}, ${s.email}`)
          .join("\n")}`
      );
    });
}

solve([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
