function constructionCrew(worker) {
  if (worker.dizziness) {
    const requiredWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
  }

  return worker;
}

const worker = {
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
};

const modifiedWorker = constructionCrew(worker);
console.log(modifiedWorker);
