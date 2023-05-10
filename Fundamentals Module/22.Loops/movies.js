function solve(arr) {
  const movieStore = [];

  arr.forEach((e) => {
    const array = e.split(" ");

    if (array.includes("addMovie")) {
      movieStore.push({ name: e.split("addMovie")[1].trim() });
    } else {
      if (array.includes("directedBy")) {
        const movie = movieStore.find(
          (obj) => obj.name === e.split("directedBy")[0].trim()
        );

        if (movie) movie.director = e.split("directedBy")[1].trim();
      } else {
        const movie = movieStore.find(
          (obj) => obj.name === e.split("onDate")[0].trim()
        );
        if (movie) movie.date = e.split("onDate")[1].trim();
      }
    }
  });

  movieStore.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

solve([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
