function solve(arr) {
  const [currentFlights, flightsToCancel, flightsToPrint] = JSON.parse(arr[0]);
  const flights = [];

  currentFlights.forEach((str) => {
    const flightNumber = str.split(" ")[0].trim();
    const city = str.split(flightNumber)[1].trim();
    flights.push({ flightNumber, city, status: "Ready to fly" });
  });

  flightsToCancel.forEach((str) => {
    const flightNumber = str.split(" ")[0].trim();
    const flightToCancel = flights.find(
      (obj) => obj.flightNumber === flightNumber
    );
    if (flightToCancel) flightToCancel.status = "Cancelled";
  });

  const toSearch = flightsToPrint[0];

  flights
    .filter((f) => f.status === toSearch)
    .forEach((f) => {
      console.log(`{ Destination: '${f.city}', Status: '${f.status}' }`);
    });
}

solve([
  '[["WN269 Delaware","FL2269 Oregon","WN498 Las Vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK430 Cancelled"],["Cancelled"]]',
]);
